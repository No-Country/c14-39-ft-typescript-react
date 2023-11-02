import { ReservationModel } from "../models/Revervation";
import { Request, Response } from "express";
import {  UserDataWithId } from "../interface/user";
import { User } from "../models";
import { HttpCodes } from "../utils";


export const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId: string) => {
  try {
    const user = await User.findById(userId)
    return user;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

export const modifyUserById = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const  user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    if(!user) return res.status(HttpCodes.CODE_NOT_FOUND).json({message: "Usuario no encontrado"})
    return res.status(HttpCodes.CODE_SUCCESS).json({user, message: "Usuario modificado con exito"});

  } catch (error: any) {
    res.status(HttpCodes.CODE_INTERNAL_SERVER_ERROR).json({ message: `${error.message}` });
  }
};

export const getUserReservationById = async (userId: string) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User no encontrado");
    }

    const userReservations = ReservationModel.find({
      user_id: userId,
    });

    return userReservations;
  } catch (error) {
    throw error;
  }
};
