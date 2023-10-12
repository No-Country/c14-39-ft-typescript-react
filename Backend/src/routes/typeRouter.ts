import express from 'express'
import Type from '../models/Type'

const TypeRouter = express.Router()

TypeRouter.route('/').
  get(async (_, res) => {
    try {
      const types = await Type.find().select('-users')
      res.status(201).json({ types })
    } catch (error) {
      throw error
    }
  })
  .post(async (req, res) => {
    try {
      const { name, description } = req.body
      const newType = new Type({
        name,
        description
      })

      await newType.save()

      res.status(201).json({ type: newType, message: "Type created" })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  })


export default TypeRouter