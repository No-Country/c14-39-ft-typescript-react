import express from 'express'
import { createUser, deleteUser, getUserById, getUsers, modifyUserById } from '../controllers/users'

const userRouter = express.Router();

userRouter
  .route('/')
  .get(async (_, res) => {
    try {
      const users = await getUsers()
      res.status(200).json({ users })
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
        countryId,
        typeId
      } = req.body

      const newUser = await createUser({
        name,
        lastname,
        email,
        password,
        city,
        address,
        image,
        countryId,
        typeId
      })

      res.status(201).json({ user: newUser, message: "User Created" })

    } catch (error) {
      throw error
    }
  })
  .put(async (req, res) => {
    try {
      // faltaria validation del req.body
      const user = await modifyUserById(req.body)
      res.status(200).json(user)
    }
    catch (error) {
      throw error
    }
  })

userRouter
  .route('/:userId')
  .get(async (req, res) => {
    try {
      const { userId } = req.params
      const user = await getUserById(userId)
      res.status(200).json(user)
    } catch (error) {
      throw error
    }
  })
  .delete(async (req, res) => {
    try {
      const { userId } = req.params
      const user = await deleteUser(userId)
      res.status(200).json(user)
    }
    catch (error) {
      throw error
    }
  })

export default userRouter