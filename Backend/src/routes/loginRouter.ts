import express from 'express'
import { loginUser } from '../controllers/loginControllers'

const LoginRouter = express.Router()

LoginRouter.route('/')
  .post(async (req, res) => {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        throw new Error("Email and password are required")
      }

      const user = await loginUser({ email, password })

      res.status(201).json({ user, message: "User Authenticated" })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  })


export default LoginRouter