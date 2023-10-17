//app contetx
import { createContext, ReactNode, useState } from 'react'

interface AppContextProps {
  children: ReactNode
}
interface AppContextData {
  isLogged: boolean
  setIsLogged: (isLogged: boolean) => void
}

const AppContext = createContext<AppContextData>({} as AppContextData)

export const AppProvider = ({ children }: AppContextProps) => {
  const [isLogged, setIsLogged] = useState(false)
  return <AppContext.Provider value={{ isLogged, setIsLogged }}>{children}</AppContext.Provider>
}
