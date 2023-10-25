import express from 'express'
import { HttpCodes } from '../utils';
import { Payment } from 'mercadopago'
import { client } from '../libs/mp'
import { User, Order } from '../models';
import { OrderController } from '../controllers/order.controller';

const webhookRouter = express.Router();
const controller = new OrderController()

webhookRouter
  .route("/")
  .post(async (req, res) => {
    try {
      const payment = req.query

      // verifica el tipo de pago payment
      if (payment.type === "payment") {
        const dataId = payment["data.id"] as string | number
        await controller.createOrder(dataId)
        return res.status(HttpCodes.CODE_SUCCESS_CREATED).end()
      }
      //   const paymented = new Payment(client)
      //   const data = await paymented.get({
      //     id: payment["data.id"] as string | number,
      //   })

      //   // verificar el estado del pago
      //   if (data && data.status === "approved") {
      //     // crear la orden
      //     const order = new Order({
      //       order_id: data.id as string | number,
      //       fecha: data.metadata.fecha as string,
      //       hora: data.metadata.hora as string,
      //       currency: data.currency_id as string,
      //       precio: data.transaction_amount as number,
      //       user_id: data.metadata.user_id as string,
      //       camp_id: data.metadata.camp_id as string,
      //       sc_id: data.metadata.sc_id as string,
      //     })

      //     await order.save()
      //   }
      // }

      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: "Error en la creacion del Order",
      })
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })

export default webhookRouter;
