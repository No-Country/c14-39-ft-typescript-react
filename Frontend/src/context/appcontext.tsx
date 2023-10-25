import { createContext, ReactNode, useState } from 'react'
import { City } from '../types/types'

interface AppContextProps {
  children: ReactNode
}
interface AppContextData {
  isLogged: boolean
  userIslogged: () => void
  userIsNotlogged: () => void
  bookingData: BookData | null
  saveBooking: (bookingData: BookData) => void
  cityId: City['id'] | null
  setCity: (city: City['id']) => void
  resetCity: () => void
}

type BookData = {
  id: string
  cancha: string
  fecha: Date
  hora: number
  // precio: number
}

export const AppContext = createContext<AppContextData>({} as AppContextData)

export const AppProvider = ({ children }: AppContextProps) => {
  const [isLogged, setIsLogged] = useState(false)
  const [bookingData, setBookingData] = useState<BookData | null>(null)
  const [cityId, setCityId] = useState<City['id'] | null>(null)

  const userIslogged = () => {
    setIsLogged(true)
  }
  const userIsNotlogged = () => {
    setIsLogged(false)
  }

  const setCity = (city: City['id']) => {
    setCityId(city)
  }

  const resetCity = () => {
    setCityId(null)
  }

  const saveBooking = ({ id, cancha, fecha, hora }: BookData) => {
    setBookingData(prevState => {
      return { ...prevState, id, cancha, fecha, hora }
    })
  }

  console.log(cityId, isLogged, bookingData)

  return (
    <AppContext.Provider
      value={{
        isLogged,
        userIslogged,
        userIsNotlogged,
        bookingData,
        saveBooking,
        cityId,
        setCity,
        resetCity,
      }}>
      {children}
    </AppContext.Provider>
  )
}
