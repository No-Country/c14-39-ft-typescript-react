import { createContext, ReactNode, useState } from 'react'
import { Camp, City } from '../types/types'

interface AppContextProps {
  children: ReactNode;
}
interface AppContextData {
  bookingData: BookData | null
  saveBooking: (bookingData: BookData) => void
  cityId: City['id'] | null
  setCity: (city: City['id']) => void
  resetCity: () => void
}

type BookData = {
  id: string
  cancha: Camp
  fecha: Date
  hora: number
  // precio: number
}

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider = ({ children }: AppContextProps) => {
  const [bookingData, setBookingData] = useState<BookData | null>(null)
  const [cityId, setCityId] = useState<City['id'] | null>(null)

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

  console.log(cityId, bookingData)

  return (
    <AppContext.Provider
      value={{
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
