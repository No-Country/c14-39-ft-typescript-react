import { createContext, ReactNode, useContext, useState } from "react"
import {
  deleteUserById,
  getUserReservations,
  modifyUserById,
} from "../api/user"
import { Reservation, UserData } from "../types/types"
import { AuthContext } from "./AuthContext"
// import { set } from "react-hook-form";

interface UserContextProps {
  children: ReactNode
}
interface UserContextData {
  updateUser: (user: UserData) => Promise<void>
  deleteUser: (user: UserData) => Promise<void>
  getReservations: (user: UserData) => Promise<void>
  reservations: Reservation[]
  setReservations: (reservations: Reservation[]) => void
}

export const UserContext = createContext<UserContextData>({} as UserContextData)

export const UserProvider = ({ children }: UserContextProps) => {
  const [reservations, setReservations] = useState<Reservation[]>([])

  const { setUser, setMessage, setErrors } = useContext(AuthContext)

  const deleteUser = async (user: UserData) => {
    try {
      const res = await deleteUserById(user)
      if (res.status === 200) {
        setMessage("Usuario eliminado correctamente")
      }
    } catch (error: any) {
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const updateUser = async (user: UserData) => {
    try {
      console.log(user)
      const res = await modifyUserById(user)
      console.log(res)
      setUser(res.data.user)
      setMessage(res.data.message)
      console.log(res)
    } catch (error: any) {
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data])
    }
  }

  const getReservations = async (user: UserData) => {
    try {
      const res = await getUserReservations(user)
      console.log(res.data.data)
      setReservations(res.data.data)
    } catch (error: any) {
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data])
    }
  }

  return (
    <UserContext.Provider
      value={{
        updateUser,
        deleteUser,
        getReservations,
        reservations,
        setReservations,
      }}>
      {children}
    </UserContext.Provider>
  )
}
