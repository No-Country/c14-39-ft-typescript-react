import { User } from '../models'
import { UserLoginData } from '../interface'
import bcrypt from 'bcrypt'

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