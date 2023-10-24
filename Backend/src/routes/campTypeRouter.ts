import express, { Request, Response } from "express";
import { validateSchema } from "../models/schemas";
import { fieldReservationSchemaValidator } from "../models/schemas/reservation.zod";
import { HttpCodes } from "../utils";
import { IReservation } from "../interface";
import { ReservationController } from "../controllers/reservation.controller";
import { sportCampTypeSchemaValidator } from "../models/schemas/scaType.zod";
import { ScaTypeController } from "../controllers/scaType.controller";
import { campSchemaValidation } from "../models/schemas/sportCamp.zod";
import { IScaType } from "../interface/scaType";

const sca_type_router = express.Router();
const controller = new ScaTypeController();

sca_type_router
  .route("/")
  .get((_, res) => {
    res.send("pagina de tipos");
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
        data?: IScaType | any;
        errors?: string[] | any;
      } = validateSchema({
        data: body,
        schema: sportCampTypeSchemaValidator,
      });

      if (!isValid) {
        return;
      }

      const dataResponse = await controller.createSportCampType(data);

      res.status(HttpCodes.CODE_SUCCESS).json({
        message: "El tipo de campo fue creado exitosamente",
        data: {
          data: dataResponse,
        },
      });
    } catch (error: String | any) {
      console.log(error);
      res.status(HttpCodes.CODE_BAD_GATEWAY).json({ error: `${error}` });
    }
  });

export default sca_type_router;
