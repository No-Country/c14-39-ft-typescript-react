import express from 'express'
import { Country } from '../models'
import { HttpCodes } from '../utils/HTTPCodes.util'
import { validateSchema } from '../../middlewares/validatorMiddleware'
import { CountrySchemaValidator } from '../models/schemas/schemas.zod'

const countryRouter = express.Router()

countryRouter.route('/').
  get(async (_, res) => {
    try {
      const countries = await Country.find().select('-users')
      return res.status(HttpCodes.CODE_SUCCESS).json({ countries })
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })
  .post(validateSchema(CountrySchemaValidator), async (req, res) => {
    try {
      const newCountry = new Country({
        ...req.body
      })

      await newCountry.save()
      return res.status(HttpCodes.CODE_SUCCESS_CREATED).json({ type: newCountry, message: "Type created" })
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      })
    }
  })


export default countryRouter