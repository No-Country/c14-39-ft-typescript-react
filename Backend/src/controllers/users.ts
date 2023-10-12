import { UserData, UserDataWithId } from '../interface/user'
import User from '../models/User'
import Country from '../models/Country'
import Type from '../models/Type'
import bcrypt from 'bcrypt'

export const getUsers = async () => {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    throw error
  }
}

export const getUserById = async (userId: string) => {
  try {
    const user = await User.findById(userId)
      .populate("country", {
        name: 1,
      })
      .populate("type", {
        name: 1,
      })
    return user
  } catch (error) {
    throw error
  }
}

export const createUser = async ({
  name,
  lastname,
  email,
  password,
  city,
  address,
  image,
  countryId,
  typeId
}: UserData) => {
  try {
    const country = await Country.findById(countryId)
    const type = await Type.findById(typeId)

    if (!country || !type) {
      throw new Error("Country or type not found")
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
      name,
      lastname,
      email,
      passwordHash,
      city,
      address,
      image,
      country: country._id,
      type: type._id
    })

    await user.save()
    return user
  } catch (error) {
    throw error
  }
}

export const deleteUser = async (userId: string) => {
  try {
    const user = await User.findByIdAndDelete(userId)
    return user
  } catch (error) {
    throw error
  }
}

export const modifyUserById = async (result: Partial<UserDataWithId>) => {
  try {
    const { userId, ...restOfResult } = result
    const user = await User.findByIdAndUpdate(userId, { $set: restOfResult }, { new: true })
    return user
  } catch (error) {
    throw error
  }
}