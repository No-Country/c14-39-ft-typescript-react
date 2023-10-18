import express from 'express'
import { loginUser } from '../controllers/loginControllers'
import { HttpCodes } from '../utils/HTTPCodes.util'

const LoginRouter = express.Router()

LoginRouter.route('/')
  .post(async (req, res) => {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        throw new Error("Email and password are required")
      }

      const user = await loginUser({ email, password })

      return res.status(HttpCodes.CODE_SUCCESS).json({ user, message: "User Authenticated" })
    } catch (error) {
      return res.status(HttpCodes.CODE_UNAUTHORIZED).json({
        message: `${error}`
      })
    }
  })


export default LoginRouter