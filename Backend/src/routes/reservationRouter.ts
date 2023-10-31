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
  .get((_, res) => {
    res.send("pagina de reservas");
  })
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
        throw new Error(errors);
      }

      const dataValid: IReservation = data;
      dataValid.fr_schedule.s_date_reserved = data?.fr_schedule.s_date_reserved
        ?.toISOString()
        .split("T")[0];

      const dataResponse = await controller.createReservation(dataValid);

      res.status(HttpCodes.CODE_SUCCESS).json({
        message: "Reserva realizada con éxito",
        data: dataResponse,
      });
    } catch (error: String | any) {
      console.log(error);
      res.status(HttpCodes.CODE_BAD_GATEWAY).json({ error: `${error}` });
    }
  });

export default reservationRouter;
