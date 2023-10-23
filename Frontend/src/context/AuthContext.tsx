import { createContext, ReactNode, useState } from 'react'

interface AuthContextProps {
  children: ReactNode
}
interface AuthContextData {
  isLogged: boolean
  userIslogged: () => void
  userIsNotlogged: () => void
  errors: string[]
  loading: boolean
  user: string
}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AppProvider = ({ children }: AuthContextProps) => {
  const [isLogged, setIsLogged] = useState(false)


  const userIslogged = () => {
    setIsLogged(true)
  }
  const userIsNotlogged = () => {
    setIsLogged(false)
  }

  return <AuthContext.Provider value={{ isLogged, userIslogged, userIsNotlogged  }}>{children}</AuthContext.Provider>
}
