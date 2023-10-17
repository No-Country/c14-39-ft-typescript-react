import User from '../models/User'
import bcrypt from 'bcrypt'
import { UserLoginData } from '../interface/user'

export const loginUser = async ({ email, password }: UserLoginData) => {
  try {
    const user = await User.findOne({ email })

    if (!user) throw new Error("User not found")

    const passwordCorrect = await bcrypt.compare(password, user.passwordHash)

    if (!passwordCorrect) throw new Error("Password incorrect")

    return user
  } catch (error) {
    throw error
  }
}