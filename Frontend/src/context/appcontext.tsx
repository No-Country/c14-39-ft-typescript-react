import { createContext, ReactNode, useState } from "react";

interface AppContextProps {
  children: ReactNode;
}
interface AppContextData {
  bookingData: BookData | null
  saveBooking: (bookingData: BookData) => void
}

type BookData = {
  id: string;
  cancha: string;
  fecha: Date;
  hora: number;
  precio: number;
};

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider = ({ children }: AppContextProps) => {
  const [bookingData, setBookingData] = useState<BookData | null>(null)


  const saveBooking = ({ id, cancha, fecha, hora, precio }: BookData) => {
    setBookingData((prevState) => {
      return { ...prevState, id, cancha, fecha, hora, precio };
    });
  };

  return <AppContext.Provider value={{  bookingData, saveBooking }}>{children}</AppContext.Provider>
}
