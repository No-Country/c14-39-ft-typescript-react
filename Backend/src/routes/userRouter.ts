import express from "express";
import {
  deleteUser,
  getUserById,
  getUserReservationById,
  getUsers,
  modifyUserById,
} from "../controllers/users.controller";
import { HttpCodes } from "../utils/HTTPCodes.util";
import { validateUserUpdate } from "../utils/validateReq.util";

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
      });
    }
  })
  .put(async (req, res) => {
    try {
      // validate
      const body = req.body;

      // validate
      const { data } = validateUserUpdate(body);

      // update user
      const user = await modifyUserById({
        ...data,
      });
      res.status(HttpCodes.CODE_SUCCESS).json(user);
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  });

userRouter.route("/reservations/:userId").get(async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await getUserReservationById(userId);
    res.status(HttpCodes.CODE_SUCCESS).json({
      message: "Reservaciones obtenidas correctamente",
      data: result,
    });
  } catch (error) {
    return res.status(HttpCodes.CODE_NOT_FOUND).json({
      message: `${error}`,
    });
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
      });
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
      });
    }
  });

export default userRouter;
