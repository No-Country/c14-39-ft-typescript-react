import express from 'express'
import Country from '../models/Country'

const countryRouter = express.Router()

countryRouter.route('/').
  get(async (_, res) => {
    try {
      const countries = await Country.find().select('-users')
      res.status(201).json({ countries })
    } catch (error) {
      throw error
    }
  })
  .post(async (req, res) => {
    try {
      const { name, image } = req.body
      const newCountry = new Country({
        name,
        image
      })

      await newCountry.save()
      res.status(201).json({ country: newCountry, message: "country created" })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  })


export default countryRouter