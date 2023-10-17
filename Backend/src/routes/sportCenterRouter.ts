import express from "express";
import {
  getSportCenters,
  getSportCenterById,
  registerSportCenter,
  modifySportCenterById,
  deleteSportCenter,
} from "../controllers/sportCenterControllers";
import {
  HttpCodes,
  validateSportCenter,
  validateUpdateSport
} from '../utils'

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
      const body = req.body;

      // validate se coloco en utils refactorizado

      console.log(body)

      const { data } = validateSportCenter(body)

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
      const body = req.body

      // validate se coloco en utils refactorizado
      const { data } = validateUpdateSport(body)

      // update sportCenter
      const sportCenter = await modifySportCenterById({
        ...data
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
