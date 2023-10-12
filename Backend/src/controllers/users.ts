import User from '../models/User'
import Country from '../models/Country'

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
    return user
  } catch (error) {
    throw error
  }
}

// export const createUser = async (name,
//   lastname,
//   email,
//   password,
//   city,
//   address,
//   image,
//   countryId) => {
//   try {
//     const user = await User.findById(userId)
//     return user
//   } catch (error) {
//     throw error
//   }
// }