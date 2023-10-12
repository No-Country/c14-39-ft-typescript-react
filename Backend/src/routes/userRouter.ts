import express from 'express'
import User from '../models/User'

const userRouter = express.Router()

userRouter
  .route('/')
  .get(async (req, res) => {
    try {
      res.send('hola ruta users')
    } catch (error) {
      throw error
    }
  })

export default userRouter