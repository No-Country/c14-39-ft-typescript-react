import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { UserData, UserLoginData } from '../types/types'
import { loginRequest, registerRequest, verifyTokenRequest } from '../api/auth'

interface AuthContextProps {
  children: ReactNode
}
interface AuthContextData {
    isLogged: boolean
    errors: string[]
    loading: boolean
    user: UserData | null
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
          setIsLogged(true);
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
      const res = await loginRequest(user)
      setIsLogged(true)
      setUser(res.data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error)
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data)
      }
      setErrors([error.response.data.message])
    }
  }

  const logout = () => {
    Cookies.remove('token')
    setIsLogged(false)
    setUser(null)
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get()
      // console.log(cookies)
      if (!cookies.token) {
        setIsLogged(false)
        setLoading(false)
        return setUser(null)
      }

      try {
        const cookies = Cookies.get()
        // console.log(cookies)
        const res = await verifyTokenRequest(cookies.token)
        console.log(res)
        if (!res.data) {
          setIsLogged(false)
          setLoading(false)
          return
        }

    return (
        <AuthContext.Provider
            value={{
                isLogged,
                errors,
                loading,
                user,
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
