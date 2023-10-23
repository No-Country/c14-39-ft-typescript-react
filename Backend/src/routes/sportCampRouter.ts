import express from "express";
import {
  getSportCenters,
  getSportCenterById,
  registerSportCenter,
  modifySportCenterById,
  deleteSportCenter,
} from "../controllers/sportCenterControllers";
import { HttpCodes } from "../utils/HTTPCodes.util";
import {
  validateSportCenter,
  validateUpdateSport,
} from "../utils/validateReq.util";

const sportCampRouter = express.Router();

sportCampRouter
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
      const newSportCenter = await registerSportCenter({
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
      res.status(HttpCodes.CODE_SUCCESS).json(sportCenter);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  });

sportCampRouter
  .route("/:sportCampId")
  .get(async (req, res) => {
    try {
      const { sportCampId } = req.params;
      const sportCenter = await getSportCenterById(sportCampId);
      res.status(HttpCodes.CODE_SUCCESS).json(sportCenter);
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      });
    }
  })
  .delete(async (req, res) => {
    try {
      const { sportCampId } = req.params;
      const sportCenter = await deleteSportCenter(sportCampId);
      res.status(200).json(sportCenter);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  });

export default sportCampRouter;
