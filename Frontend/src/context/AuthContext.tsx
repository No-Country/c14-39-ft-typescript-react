import { createContext, ReactNode, useEffect, useState } from 'react'
import { UserData, UserLoginData } from '../types/types'
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth'

import Cookies from 'js-cookie'

interface AuthContextProps {
  children: ReactNode
}
interface AuthContextData {
  isLogged: boolean
  errors: string[]
  loading: boolean
  user: UserData | null
  setUser: (user: UserData) => void
  signUp: (user: UserData) => Promise<void>
  signIn: (user: UserLoginData) => Promise<void>
  logout: () => void
  message: string | null
  setMessage: (message: string) => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: AuthContextProps) => {

    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState<UserData | null>(null);
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState<string>("");

  const signUp = async (user: UserData) => {
    try {
      const res = await registerRequest(user);
      setMessage(res.data.message);
      setUser(res.data.user);
      setIsLogged(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const signIn = async (user: UserLoginData) => {
    try {
      const res = await loginRequest(user);
      setIsLogged(true);
      setMessage(res.data.message)
      setUser(res.data.user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsLogged(false);
    setUser(null);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsLogged(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        const cookies = Cookies.get();
        const res = await verifyTokenRequest(cookies.token);

        if (!res.data) {
          setIsLogged(false);
          setLoading(false);
          return;
        }
        setIsLogged(true);
        setUser(res.data);
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error) {
        // console.log(error)
        setIsLogged(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        errors,
        loading,
        user,
        setUser,
        signUp,
        signIn,
        logout,
        message,
        setMessage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
