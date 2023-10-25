import express from 'express';
import { validateSchema } from "../middlewares/validatorMiddleware";
import { UserSchemaValidator, loginSchemaValidator } from "../models/schemas";
import { login, logout, register, verifyToken } from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter
  .post('/register', validateSchema(UserSchemaValidator), register)
  .post('/login', validateSchema(loginSchemaValidator), login)
  .post('/logout', logout)
  .get('/verify', verifyToken);

export default authRouter;
