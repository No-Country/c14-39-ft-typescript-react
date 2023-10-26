import express from "express";
import { HttpCodes } from "../utils/HTTPCodes.util";
import { OrderSchemaValidator, validateSchema } from "../models/schemas";
import { IOrderValidator } from "../interface";
import { OrderController } from "../controllers/order.controller";

const orderRouter = express.Router();
const controller = new OrderController();

orderRouter
  .route("/")

  .get(async (req, res) => {
    try {
      const { id } = req.query

      if (id) {
        const order = await controller.getOrderById(id as string)
        return res.status(HttpCodes.CODE_SUCCESS).json({ order })
      }
      const orders = await controller.getOrders()

      return res.status(HttpCodes.CODE_SUCCESS).json({
        message: "Ordenes se obtuvieron de manera exitosa",
        orders,
      })
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })
  .post(async (req, res) => {
    try {
      const order = req.body
      // validando la solicitud
      const {
        isValid,
        data,
        errors,
      }: {
        isValid: boolean;
        data?: IOrderValidator | any;
        errors?: string | any;
      } = validateSchema({
        data: order,
        schema: OrderSchemaValidator,
      });

      if (!isValid) {
        console.log({ errors });
        throw new Error(errors);
      }

      const initPoint = await controller.createCheckout(data)

      return res.status(HttpCodes.CODE_SUCCESS).json({ initPoint })
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })

orderRouter
  .route("/:user_id")
  .get(async (req, res) => {
    try {
      const { user_id } = req.params;
      const orders = await controller.getOrdersByUserId(user_id)
      res.status(HttpCodes.CODE_SUCCESS).json({
        message: "Ordenes se obtuvieron de manera exitosa",
        orders,
      })

    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })

export default orderRouter;