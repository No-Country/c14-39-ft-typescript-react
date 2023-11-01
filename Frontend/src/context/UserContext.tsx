import { createContext, ReactNode, useContext } from "react";
import { deleteUserById, modifyUserById } from "../api/user";
import { UserData } from "../types/types";
import { AuthContext } from "./AuthContext";

interface UserContextProps {
  children: ReactNode;
}
interface UserContextData {
  updateUser: (user: UserData) => Promise<void>;
  deleteUser: (user: UserData) => Promise<void>;
}
  
export const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserContextProps) => {

  const {setUser, setMessage, setErrors} = useContext(AuthContext)

  const deleteUser = async (user: UserData) => {
    try {
      const res = await deleteUserById(user);
      if(res.status === 200) {
        setMessage('Usuario eliminado correctamente')
      }
    } catch (error: any) {
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  }

  const updateUser = async (user: UserData) => {
    try {
      console.log(user)
      const res = await modifyUserById(user);
      console.log(res)
      setUser(res.data.user)
      setMessage(res.data.message)
      console.log(res)
    } catch (error:any) {
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data]);
    }
  }

  return (
    <UserContext.Provider
      value={{
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
