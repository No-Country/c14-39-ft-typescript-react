import User from "../models/User";
import bcrypt from "bcrypt";
import { UserData, UserLoginData } from "../interface/user";
import { Request, Response } from "express";
import { createToken } from "../libs/jwt";
import {HttpCodes} from "../utils/HTTPCodes.util";
import jwt from 'jsonwebtoken';
import Country from "../models/Country";


export const register = async (req: Request, res: Response) => {
   const data: UserData = req.body;

   try {

    //verificar si el mail ya esta en uso
    const userFound = await User.findOne({email: data.email});
    if(userFound) return res.status(HttpCodes.CODE_BAD_REQUEST).json({message: "El email ya esta en uso"});

    //verificar la existencia del country
    console.log(data.country_id)
    const countryFound = await Country.findOne({_id: data.country_id});
    console.log(countryFound)
    if(!countryFound) return res.status(HttpCodes.CODE_BAD_REQUEST).json({message: "Pais invalido"});

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
    const token = await createToken({userId: newUser._id.toString()});

    res.cookie("token", token);


   } catch (error: any) {
    res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({message: `${error.message}`});
   }
    
}
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body as UserLoginData;

        const mailFound = await User.findOne({email});

        if(!mailFound) return res.status(HttpCodes.CODE_BAD_REQUEST).json({message: "Email incorrecto"});

        const passwordCorrect = await bcrypt.compare(password, mailFound.passwordHash);

        if(!passwordCorrect) return res.status(HttpCodes.CODE_BAD_REQUEST).json({message: "Contraseña incorrecta"});

        //crear y guardar el token en una cookie

        const token = await createToken({userId: mailFound._id.toString()});

        res.cookie("token", token);

        res.status(HttpCodes.CODE_SUCCESS).json({message: "Login correcto"});

    } catch (error: any) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({message: `${error.message}`});
    }
}

export const logout = async (req: Request, res: Response) => {
    try {
        res.cookie("token", "", {
            expires: new Date(0),
          });
        res.status(HttpCodes.CODE_SUCCESS).json({message: "Logout correcto"});
    } catch (error: any) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({message: `${error.message}`});
    }
}

export const profile = async (req: Request, res: Response) => {
    try {
        const userFound = await User.findById(req.userId);
        if (!userFound) {
          return res.status(404).json({ message: "User not found." });
        }
    
        res.json(userFound);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
}

export const verifyToken = async (req: Request, res: Response) => {
    try {
        const authHeader = req.headers["authorization"];

        //verficar si existe el token
        if(!authHeader) return res.status(HttpCodes.CODE_UNAUTHORIZED).json({message: "No autorizado"});

        //verificar si el token es valido
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY as string, async (err: any, user: any) => {
            if(err) return res.status(HttpCodes.CODE_UNAUTHORIZED).json({message: "No autorizado"});

            const userFound = await User.findById(user.id);

            if(!userFound) return res.status(HttpCodes.CODE_UNAUTHORIZED).json({message: "No autorizado"});

        return res.status(HttpCodes.CODE_SUCCESS).json({message: "Token valido"});
        });

    } catch (error: any) {
        res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({message: `${error.message}`});
    }
}