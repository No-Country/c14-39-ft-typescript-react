import { createContext, ReactNode, useState } from "react";

interface AppContextProps {
  children: ReactNode;
}
interface AppContextData {
  isLogged: boolean;
  userIslogged: () => void;
  userIsNotlogged: () => void;
  bookingData: BookData | null;
  saveBooking: (bookingData: BookData) => void;
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
  const [isLogged, setIsLogged] = useState(true);
  const [bookingData, setBookingData] = useState<BookData | null>(null);

  const userIslogged = () => {
    setIsLogged(true);
  };
  const userIsNotlogged = () => {
    setIsLogged(false);
  };

  const saveBooking = ({ id, cancha, fecha, hora, precio }: BookData) => {
    setBookingData((prevState) => {
      return { ...prevState, id, cancha, fecha, hora, precio };
    });
  };

  return (
    <AppContext.Provider
      value={{
        isLogged,
        userIslogged,
        userIsNotlogged,
        bookingData,
        saveBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
