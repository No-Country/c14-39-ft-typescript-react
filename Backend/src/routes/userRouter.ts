import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  modifyUserById,
} from "../controllers/usersControllers";
import { HttpCodes, validateUser, validateUserUpdate } from '../utils'

const userRouter = express.Router();

userRouter
  .route("/")
  .get(async (_, res) => {
    try {
      const users = await getUsers();
      res.status(HttpCodes.CODE_SUCCESS).json({ users });
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })
  .post(async (req, res) => {
    try {
      const body = req.body;

      // validate se coloco en utils refactorizado
      const { data } = validateUser(body)

      // create user
      const newUser = await createUser({
        ...data,
      });

      res
        .status(HttpCodes.CODE_SUCCESS_CREATED)
        .json({ user: newUser, message: "User Created" });
    } catch (error) {
      console.log(error);

      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  })
  .put(async (req, res) => {
    try {
      // validate
      const body = req.body

      // validate
      const { data } = validateUserUpdate(body)

      // update user
      const user = await modifyUserById({
        ...data
      });
      res.status(HttpCodes.CODE_SUCCESS).json(user);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      })
    }
  });

userRouter
  .route("/:userId")
  .get(async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await getUserById(userId);
      res.status(HttpCodes.CODE_SUCCESS).json(user);
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      })
    }
  })
  .delete(async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await deleteUser(userId);
      res.status(200).json(user);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      })
    }
  });

export default userRouter;
