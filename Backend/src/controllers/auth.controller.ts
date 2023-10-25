import { User } from "../models";
import bcrypt from "bcrypt";
import { UserData, UserLoginData } from "../interface/user";
import { Request, Response } from "express";
import { createToken } from "../libs/jwt";
import { HttpCodes } from "../utils/HTTPCodes.util";
import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config();

const { TOKEN_SECRET } = process.env;

export const register = async (req: Request, res: Response) => {
  const data: UserData = req.body;

  try {

    //verificar si el mail ya esta en uso
    const userFound = await User.findOne({ email: data.email });
    if (userFound) return res.status(HttpCodes.CODE_BAD_REQUEST).json({ message: "El email ya esta en uso" });

    //encriptar contraseña
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(data.password, saltRounds);

    //crear usuario
    const newUser = new User({
      ...data,
      passwordHash,
    });

    //guardar usuario
    await newUser.save();


    //crear y guardar el token en una cookie
    const token = await createToken({ userId: newUser._id.toString() });

    res.cookie("token", token);

    return res.status(HttpCodes.CODE_SUCCESS).json({ message: "Usuario registrado con exito" });


  } catch (error: any) {
    res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: `${error.message}` });
  }

}

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as UserLoginData;

    const mailFound = await User.findOne({ email });

    if (!mailFound) return res.status(HttpCodes.CODE_BAD_REQUEST).json({ message: "Email incorrecto" });

    const passwordCorrect = await bcrypt.compare(password, mailFound.passwordHash);

    if (!passwordCorrect) return res.status(HttpCodes.CODE_BAD_REQUEST).json({ message: "Contraseña incorrecta" });

    //crear y guardar el token en una cookie

    const token = await createToken({ userId: mailFound._id.toString() });

    res.cookie("token", token);

    res.status(HttpCodes.CODE_SUCCESS).json({ message: "Login correcto" });

  } catch (error: any) {
    res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: `${error.message}` });
  }
}

export const logout = async (req: Request, res: Response) => {
  try {

    if (!req.cookies?.token) {
      return res.status(HttpCodes.CODE_BAD_REQUEST).json({ message: "No hay ninguna sesion activa" });
    }

    res.cookie("token", "", {
      expires: new Date(0),
    });
    res.status(HttpCodes.CODE_SUCCESS).json({ message: "Logout exitoso" });
  } catch (error: any) {
    res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: `${error.message}` });
  }
}

export const verifyToken = async (req: Request, res: Response) => {
  const { token } = req.cookies;
  // console.log(token)

  if (!token) return res.status(HttpCodes.CODE_UNAUTHORIZED).json({ message: "Unauthorized" });

  jwt.verify(token, TOKEN_SECRET as string, async (err: any, user: any) => {

    if (err) {
      return res.status(HttpCodes.CODE_UNAUTHORIZED).json({ message: "Unauthorized - Invalid token" });
    }

    if (!user || typeof user === 'string') {
      return res.status(HttpCodes.CODE_UNAUTHORIZED).json({ message: "Unauthorized - Invalid token payload" });
    }

    const userFound = await User.findById(user.userId);
    if (!userFound) {
      return res.status(HttpCodes.CODE_UNAUTHORIZED).json({ message: "Unauthorized - User not found" });
    }

    // Aquí puedes agregar el usuario al objeto req si planeas usarlo después
    // req.user = userFound;

    return res.status(HttpCodes.CODE_SUCCESS).json({ user: userFound });
  });

}