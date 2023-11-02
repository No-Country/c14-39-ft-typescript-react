import React, { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import { AuthContext } from "../../context/AuthContext"

export const MatchHistoryComponent: React.FC = () => {

  const {getReservations, reservations} = useContext(UserContext)
  const {user} = useContext(AuthContext)

  useEffect(() => {
    getReservations(user!)
  }, [])


  
  return  <div>
  <h1>Historial de Reservaciones</h1>
  <ul>
    {reservations.map(reservation => (
      <li key={reservation._id}>
        <p>Fecha: {reservation.fr_schedule.s_date_reserved}</p>
        <p>Hora de Inicio: {reservation.fr_schedule.s_start}</p>
        <p>Hora de Fin: {reservation.fr_schedule.s_end}</p>
        <p>Precio: ${reservation.price_total.toFixed(2)}</p>
        <p>Establecimiento: {reservation.sc_id}</p>
        <p>Cancha: {reservation.sca_id}</p>
      </li>
    ))}
  </ul>
</div>
}
