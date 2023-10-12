import express from 'express'
import User from '../models/User'
import County from '../models/Country'

const userRouter = express.Router()

userRouter
  .route('/')
  .get(async (_, res) => {
    try {
      const users = await User.find()
      res.status(201).json({ users })
    } catch (error) {
      throw error
    }
  })
  .post(async (req, res) => {
    try {
      const {
        name,
        lastname,
        email,
        password,
        city,
        address,
        image,
        countryId
      } = req.body

      const country = await County.findById(countryId)

      const newUser = new User({
        name,
        lastname,
        email,
        password,
        city,
        address,
        image,
        country: country?._id,
      })

      await newUser.save()
      res.status(201).json({ user: newUser, message: "user created" })

    } catch (error) {
      throw error
    }
  })

export default userRouter