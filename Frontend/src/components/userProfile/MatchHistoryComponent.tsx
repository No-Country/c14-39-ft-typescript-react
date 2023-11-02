import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import { AuthContext } from "../../context/AuthContext"
import { ReservacionCard } from "./ReservacionCard"

export const MatchHistoryComponent = () => {
  const { getReservations, reservations } = useContext(UserContext)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    getReservations(user!)
  }, [])

  return (
    <div className='wrapper'>
      <h1 className='mt-6 mb-6 text-3xl text-center font-display text-base-blue1'>
        Historial de Reservaciones
      </h1>
      <ul className='flex flex-wrap justify-center gap-4'>
        {reservations.map(reservation => (
          <ReservacionCard
            key={reservation._id}
            reservation={reservation}
          />
        ))}
      </ul>
    </div>
  )
}
