import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  modifyUserById,
} from "../controllers/users.controller";
import { HttpCodes } from '../utils/HTTPCodes.util';
import { authRequired } from "../middlewares/validateToken";
import { ZodError } from "zod";
import { UserUpdateSchema } from "../models/schemas";
import { validateSchema } from "../middlewares/validatorMiddleware";


const userRouter = express.Router();


// Obtener todos los usuarios
userRouter.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(HttpCodes.CODE_SUCCESS).json({ users });
  } catch (error) {
    res.status(HttpCodes.CODE_NOT_FOUND).json({ message: `${error}` });
  }
});

// Modificar usuario por ID
userRouter.put("/:userId", authRequired, validateSchema(UserUpdateSchema), modifyUserById);

// Obtener un usuario por ID
userRouter.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await getUserById(userId);
    res.status(HttpCodes.CODE_SUCCESS).json(user);
  } catch (error) {
    res.status(HttpCodes.CODE_NOT_FOUND).json({ message: `${error}` });
  }
});

// Eliminar un usuario por ID

userRouter.delete("/:userId", authRequired, async (req, res) => {
  try {
    const { userId } = req.params;
    await deleteUser(userId);
    res.status(HttpCodes.CODE_SUCCESS).json({ message: "User eliminado" });
  } catch (error) {
    res.status(HttpCodes.CODE_BAD_REQUEST).json({ message: `${error}` });
  }
});

export default userRouter;
