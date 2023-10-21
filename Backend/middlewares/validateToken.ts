import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

if (!TOKEN_SECRET) {
  throw new Error("TOKEN_SECRET is not defined in the environment variables");
}

export const authRequired = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const token: string | undefined = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(
    token,
    TOKEN_SECRET as string,
    (err: jwt.JsonWebTokenError | null, user: any) => {
      if (err) return res.status(403).json({ message: "Invalid token" });

      req.userId = user;
      next();
    }
  );
};
