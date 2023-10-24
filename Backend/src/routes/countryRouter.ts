import express from "express";
import { HttpCodes } from "../utils/HTTPCodes.util";
import { validateCountry } from "../utils/validateReq.util";
import { CountryController } from "../controllers/country.controller";

const countryRouter = express.Router();
const controller = new CountryController();

countryRouter
  .route("/")
  .get(async (_, res) => {
    try {
      const countries = await controller.getAllCountries();
      return res.status(HttpCodes.CODE_SUCCESS).json({
        message:
          "La informacion de todas las ciudades se obtuvieron de la manera exitosa",
        data: countries,
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

      // validate country
      const { data } = validateCountry(body);

      const newCountry = controller.createCountry(data);
      return res.status(HttpCodes.CODE_SUCCESS_CREATED).json({
        data: newCountry,
        message: "Nueva ciudad se creo de manera exitosa",
      });
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  });

countryRouter.route("/:country_id").get(async (req, res) => {
  try {
    const { country_id } = req.params;
    const country = await controller.getByIdCountry(country_id);
    return res.status(HttpCodes.CODE_SUCCESS).json({
      message: "La informacion  se obtuvo de manera exitosa",
      data: country,
    });
  } catch (error) {
    return res.status(HttpCodes.CODE_NOT_FOUND).json({
      message: `${error}`,
    });
  }
});

export default countryRouter;
