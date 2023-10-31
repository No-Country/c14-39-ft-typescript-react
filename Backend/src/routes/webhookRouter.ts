import express from 'express'
import { HttpCodes } from '../utils';
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
