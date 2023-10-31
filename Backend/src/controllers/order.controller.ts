import { Payment, Preference } from "mercadopago";
import {
  IOrderController,
  IOrderResponse,
  IOrderValidator,
} from "../interface";
import { Camp, Order, SportCenterModel, User } from "../models";
import { client } from '../libs/mp'
import { randomUUID } from "crypto";
import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes";
import { prodOrigins, devOrigins, webhookUrl } from "../data/consts";

export class OrderController implements IOrderController {

  private readonly populateFields = [
    { path: "user_id", select: "_id name" },
    { path: "camp_id", select: "_id sca_num" },
    { path: "sc_id", select: "_id sc_name" }
  ];

  private async populateOrders(query: any): Promise<IOrderResponse[]> {
    try {
      const orders: IOrderResponse[] = await Order.find(query).populate(this.populateFields)
      return orders;
    } catch (error) {
      throw error;
    }
  }

  public async getOrders(): Promise<IOrderResponse[]> {
    return this.populateOrders({});
  }

  public async getOrdersByUserId(userId: string): Promise<IOrderResponse[]> {
    try {
      const user = await User.findById(userId);

      if (!user) {
        throw new Error("User not found");
      }

      return this.populateOrders({ user_id: user._id });
    } catch (error) {
      throw error;
    }
  }

  public async getOrderById(orderId: string):
    Promise<IOrderResponse | null> {
    try {
      const order = await Order.findOne({ order_id: orderId })
        .populate(this.populateFields)
      return order
    } catch (error) {
      throw error
    }
  }

  public async createCheckout(data: IOrderValidator): Promise<string> {
    try {
      // si no existe el user o el sportCenter o el camp, se lanza un error
      const [user, sc, camp] = await Promise.all([
        User.findById(data.user_id),
        SportCenterModel.findById(data.sc_id),
        Camp.findById(data.camp_id),
      ])

      if (![user, sc, camp].every(Boolean)) {
        throw new Error("User or sportCenter or camp not found");
      }

      const preference = new Preference(client)

      const url = process.env.NODE_ENV === 'production' ? prodOrigins : devOrigins;

      const checkout: PreferenceResponse = await preference.create({
        body: {
          items: [
            {
              id: randomUUID(),
              title: `Campo ${camp.sca_num}`,
              unit_price: data.precio,
              quantity: 1,
              currency_id: "ARS",
            },
          ],
          metadata: {
            fecha: data.fecha,
            hora: data.hora,
            user_id: user?._id,
            sc_id: sc._id,
            camp_id: camp._id,
          },
          back_urls: {
            success: `${url[0]}/confirm`,
            failure: `${url[0]}/error`,
          },
          notification_url: webhookUrl,
          auto_return: "approved",
        },
      })

      return checkout.init_point as string
    } catch (error) {
      throw error
    }
  }

  public async createOrder(dataId: string | number):
    Promise<any> {
    try {
      const paymented = new Payment(client)
      const data = await paymented.get({
        id: dataId
      })

      // verificar el estado del pago
      if (data && data.status === "approved") {
        // crear la orden
        const order = new Order({
          order_id: data.id as string | number,
          fecha: data.metadata.fecha as string,
          hora: data.metadata.hora as string,
          currency: data.currency_id as string,
          precio: data.transaction_amount as number,
          user_id: data.metadata.user_id as string,
          camp_id: data.metadata.camp_id as string,
          sc_id: data.metadata.sc_id as string,
        })

        await order.save()
      }
    } catch (error) {
      throw error
    }
  }
}
