import express from 'express'
import { Type } from '../models'
import { HttpCodes } from '../utils/HTTPCodes.util'
import { validateSchema } from '../middlewares/validatorMiddleware'
import { TypeUserSchemaValidator } from '../models/schemas/schemas.zod'

const TypeRouter = express.Router();

TypeRouter.route("/")
  .get(async (_, res) => {
    try {
      const types = await Type.find().select("-users");
      return res.status(HttpCodes.CODE_SUCCESS).json({ types });
    } catch (error) {
      return res.status(HttpCodes.CODE_NOT_FOUND).json({
        message: `${error}`,
      });
    }
  })
  .post(validateSchema(TypeUserSchemaValidator), async (req, res) => {
    try {
      const newType = new Type({
        ...req.body
      })

      await newType.save();

      return res
        .status(HttpCodes.CODE_SUCCESS_CREATED)
        .json({ type: newType, message: "Type created" });
    } catch (error) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({
        message: `${error}`,
      });
    }
  });

export default TypeRouter;
