import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

export const validateSchema =
  <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json(error.errors.map((e) => e.message));
      } else {
        next(error);
      }
    }
  };
