import express from 'express'
import {
  getSportCenters,
  getSportCenterById,
  registerSportCenter,
  modifySportCenterById,
  deleteSportCenter,
} from "../controllers/sportCenterControllers";
import { HttpCodes } from '../utils/HTTPCodes.util'
import { validateSchema } from '../../middlewares/validatorMiddleware'
import { SportCenterSchemaValidator, SportCenterUpdateSchema } from "../models/schemas/sportCenter.zod"

const sportCenterRouter = express.Router();

sportCenterRouter
  .route("/")
  .get(async (_, res) => {
    try {
      const sportCenters = await getSportCenters();
      res.status(HttpCodes.CODE_SUCCESS).json({ sportCenters });
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })
  .post(async (req, res) => {
    try {
      // create user
      const newSportCenter = await registerSportCenter({
        ...req.body,
      });

      res
        .status(HttpCodes.CODE_SUCCESS_CREATED)
        .json({ sportCenter: newSportCenter, message: "Sport Center Created" });
    } catch (error) {
      console.log(error);
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  })
  .put(async (req, res) => {
    try {
      // update sportCenter
      const sportCenter = await modifySportCenterById({
        ...req.body
      });
      res.status(HttpCodes.CODE_SUCCESS).json(sportCenter);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      })
    }
  });

sportCenterRouter
  .route("/:sportCenterId")
  .get(async (req, res) => {
    try {
      const { sportCenterId } = req.params;
      const sportCenter = await getSportCenterById(sportCenterId);
      res.status(HttpCodes.CODE_SUCCESS).json(sportCenter);
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })
  .delete(async (req, res) => {
    try {
      const { sportCenterId } = req.params;
      const sportCenter = await deleteSportCenter(sportCenterId);
      res.status(200).json(sportCenter);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      })
    }
  });

export default sportCenterRouter;
