import {  UserDataWithId } from "../interface/user";
import User from "../models/User";


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
      .populate("country", {
        name: 1,
      })
      .populate("type", {
        name: 1,
      });
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

export const modifyUserById = async (result: Partial<UserDataWithId>) => {
  try {
    const { userId, ...restOfResult } = result;
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: restOfResult },
      { new: true }
    );
    return user;
  } catch (error) {
    throw error;
  }
};
