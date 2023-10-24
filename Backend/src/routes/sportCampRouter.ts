import express from "express";
import {
  getSportCenterById,
  modifySportCenterById,
  deleteSportCenter,
} from "../controllers/sportCenterControllers";
import { HttpCodes } from "../utils/HTTPCodes.util";
import { validateUpdateSport } from "../utils/validateReq.util";
import { SportCampController } from "../controllers/sportCamp.controller";
import { validateSchema } from "../models/schemas";
import { ISportCamp } from "../interface/sportCamp";
import { campSchemaValidation } from "../models/schemas/sportCamp.zod";

const sportCampRouter = express.Router();
const controller = new SportCampController();

sportCampRouter
  .route("/")
  .get(async (_, res) => {
    try {
      const sportCenters = await controller.getAllSportCamps();
      res.status(HttpCodes.CODE_SUCCESS).json({
        message: "canchas se obtuvieron de manera correcta",
        data: sportCenters,
      });
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      });
    }
  })
  .post(async (req, res) => {
    try {
      const body = req.body;

      const {
        isValid,
        data,
        errors,
      }: {
        isValid: boolean;
        data?: ISportCamp | any;
        errors?: string[] | any;
      } = validateSchema({
        data: body,
        schema: campSchemaValidation,
      });

      if (!isValid) {
        throw new Error(errors);
      }

      // create user
      const newSportCenter = await controller.createSportCamp(data);

      res
        .status(HttpCodes.CODE_SUCCESS_CREATED)
        .json({ sportCenter: newSportCenter, message: "Sport Camp Created" });
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  })
  .put(async (req, res) => {
    try {
      // validate
      const body = req.body;

      // validate se coloco en utils refactorizado
      const { data } = validateUpdateSport(body);

      // update sportCenter
      const sportCenter = await modifySportCenterById({
        ...data,
      });
      res.status(HttpCodes.CODE_SUCCESS).json(sportCenter);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  });

sportCampRouter
  .route("/:sport_camp_id")
  .get(async (req, res) => {
    try {
      const { sport_camp_id } = req.params;
      const sportCenter = await controller.getByIdSportCamps(sport_camp_id);
      res
        .status(HttpCodes.CODE_SUCCESS)
        .json({ message: "Cancha obtenido", data: sportCenter });
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      });
    }
  })
  .delete(async (req, res) => {
    try {
      const { sport_camp_id } = req.params;
      const sportCenter = await deleteSportCenter(sport_camp_id);
      res.status(200).json(sportCenter);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  });

export default sportCampRouter;
