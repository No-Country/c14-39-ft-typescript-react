import express from "express";
import {
  getSportCenters,
  getSportCenterById,
  modifySportCenterById,
  deleteSportCenter,
  createSportCenter,
} from "../controllers/sportCenterControllers";
import { HttpCodes } from "../utils/HTTPCodes.util";
import {
  validateSportCenter,
  validateUpdateSport,
} from "../utils/validateReq.util";

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
      });
    }
  })
  .post(async (req, res) => {
    try {
      const body = req.body;

      // validate se coloco en utils refactorizado
      const { data } = validateSportCenter(body);

      // create user
      const newSportCenter = await createSportCenter({
        ...data,
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
      // validate
      const body = req.body;

      // validate se coloco en utils refactorizado
      const { data } = validateUpdateSport(body);

      // update sportCenter
      const sportCenter = await modifySportCenterById({
        ...data,
      });
      res
        .status(HttpCodes.CODE_SUCCESS)
        .json({
          message: "Centros deportivos obtenidos de manera correcta",
          data: sportCenter,
        });
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  });

sportCenterRouter
  .route("/:sport_center_id")
  .get(async (req, res) => {
    try {
      const { sport_center_id } = req.params;
      const sportCenter = await getSportCenterById(sport_center_id);
      res.status(HttpCodes.CODE_SUCCESS).json({
        message: "centro deportivo obtenido de manera correcta",
        data: sportCenter,
      });
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      });
    }
  })
  .delete(async (req, res) => {
    try {
      const { sport_center_id } = req.params;
      const sportCenter = await deleteSportCenter(sport_center_id);
      res.status(200).json(sportCenter);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  });

export default sportCenterRouter;
