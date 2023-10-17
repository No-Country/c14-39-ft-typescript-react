import express from 'express'
import { Country } from '../models'
import { HttpCodes, validateCountry } from '../utils'

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
  .post(async (req, res) => {
    try {
      const body = req.body

      // validate country
      const { data } = validateCountry(body)

      const newCountry = new Country({
        ...data
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