import { Payment, Preference } from "mercadopago";
import {
  IOrderController,
  IOrder,
  IOrderResponse,
  IOrderValidator,
} from "../interface";
import { Camp, Order, SportCenterModel, User } from "../models";
import { client } from '../libs/mp'
import { randomUUID } from "crypto";
import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes";

export class OrderController implements IOrderController {
  // Create order
  public async getOrders(): Promise<IOrderResponse[]> {

    try {
      const orders: IOrderResponse[] = await Order.find()
        .populate("user_id", {
          _id: 1,
          name: 1,
        })
        .populate("camp_id", {
          _id: 1,
          sca_num: 1,
        })
        .populate("sc_id", {
          _id: 1,
          sc_name: 1,
        })
      return orders
    } catch (error) {
      throw error
    }
  }

  public async getOrdersByUserId(userId: string): Promise<IOrderResponse[]> {
    try {
      const user = await User.findById(userId)

      if (!user) {
        throw new Error("User not found")
      }

      const orders: IOrderResponse[] = await Order.find({ user_id: userId })
        .populate("user_id", {
          _id: 1,
          name: 1,
        })
        .populate("camp_id", {
          _id: 1,
          sca_num: 1,
        })
        .populate("sc_id", {
          _id: 1,
          sc_name: 1,
        })
      return orders
    } catch (error) {
      throw error
    }
  }

  public async createCheckout(data: IOrderValidator): Promise<string | any> {
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

      const checkout: PreferenceResponse = await preference.create({
        body: {
          items: [
            {
              id: randomUUID(),
              title: `Campo ${camp.sca_num}`,
              unit_price: data.precio,
              quantity: 1,
              currency_id: "PEN",
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
            success: "http://localhost:5173/confirm",
            failure: "http://localhost:5173/error",
            pending: "http://localhost:5173/pending",
          },
          notification_url: "", //Ruta deploy backend o crear ngrok: "https://46e1-2800-200-f008-bca7-00-2.ngrok.io/api/webhook",
          auto_return: "approved",
        },
      })

      return checkout.init_point
    } catch (error) {
      return error
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
