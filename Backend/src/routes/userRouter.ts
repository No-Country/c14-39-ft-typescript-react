import express from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  modifyUserById,
} from "../controllers/users";
import { UserSchemaValidator, validateSchema } from "../models/schemas";
import { HttpCodes } from "../utils/HTTPCodes.util";

const userRouter = express.Router();

userRouter
  .route("/")
  .get(async (_, res) => {
    try {
      const users = await getUsers();
      res.status(200).json({ users });
    } catch (error) {
      throw error;
    }
  })
  .post(async (req, res) => {
    try {
      const body = req.body;

      // validate
      const { isValid, data, errors } = validateSchema({
        data: body,
        schema: UserSchemaValidator,
      });

      if (!isValid) {
        const errorString = errors?.map((error: any) => error.message).join(",");
        throw new Error(errorString);
      }

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
      // faltaria validation del req.body
      const user = await modifyUserById(req.body);
      res.status(200).json(user);
    } catch (error) {
      throw error;
    }
  });

userRouter
  .route("/:userId")
  .get(async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      throw error;
    }
  })
  .delete(async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await deleteUser(userId);
      res.status(200).json(user);
    } catch (error) {
      throw error;
    }
  });

export default userRouter;
