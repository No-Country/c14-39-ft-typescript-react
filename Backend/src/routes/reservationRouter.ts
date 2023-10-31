import express, { Request, Response } from "express";
import { validateSchema } from "../models/schemas";
import { fieldReservationSchemaValidator } from "../models/schemas/reservation.zod";
import { HttpCodes } from "../utils";
import { IReservation } from "../interface";
import { ReservationController } from "../controllers/reservation.controller";

const reservationRouter = express.Router();
const controller = new ReservationController();

reservationRouter
  .route("/")
  // .get((req, res) => {
  //   res.send("pagina de reservas");
  // })
  .post(async (req: Request, res: Response) => {
    try {
      const body = req.body;

      const {
        isValid,
        data,
        errors,
      }: {
        isValid: boolean;
        data?: IReservation | any;
        errors?: string | any;
      } = validateSchema({
        data: body,
        schema: fieldReservationSchemaValidator,
      });

      if (!isValid) {
        console.log({ errors });

        throw new Error(errors);
      }

      const dataResponse = await controller.createReservation(data);

      res.status(HttpCodes.CODE_SUCCESS).json({
        message: "Reserva realizada con éxito",
        data,
      });
    } catch (error: String | any) {
      console.log(error);
      res.status(HttpCodes.CODE_BAD_GATEWAY).json({ error: `${error}` });
    }
  });

reservationRouter
  .route("/:userId")
  .get(async (req, res) => {
    try {
      const { userId } = req.params

      const reservations = await controller.getReservationsByUser(userId as string)

      return res.status(HttpCodes.CODE_SUCCESS).json({
        message: "Reservas se obtuvieron de manera exitosa",
        reservations
      })
    } catch (error) {
      res.status(HttpCodes.CODE_NOT_FOUND).json({ error: `${error}` })
    }
  })

export default reservationRouter;
