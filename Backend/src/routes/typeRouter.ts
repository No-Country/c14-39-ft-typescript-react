import express from 'express'
import { Type } from '../models'
import { HttpCodes, validateType } from '../utils'

const TypeRouter = express.Router()

TypeRouter.route('/').
  get(async (_, res) => {
    try {
      const types = await Type.find().select('-users')
      return res.status(HttpCodes.CODE_SUCCESS).json({ types })
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })
  .post(async (req, res) => {
    try {
      const body = req.body

      // validate types

      const { data } = validateType(body)

      const newType = new Type({
        ...data
      })

      await newType.save()

      return res.status(HttpCodes.CODE_SUCCESS_CREATED).json({ type: newType, message: "Type created" })
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      })
    }
  })


export default TypeRouter