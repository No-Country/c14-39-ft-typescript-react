import { Reservation } from "../../types/types"
import { useSportCamp, useSportCenter } from "../../data/useSportData"
import { formatPrice } from "../../utils/utils"

type ReservationCardProps = {
  reservation: Reservation
}

export const ReservacionCard = ({ reservation }: ReservationCardProps) => {
  const {
    sportCenterInfo,
    isLoading: centerLoading,
    isError: centerError,
  } = useSportCenter(reservation.sc_id)
  const { sportCampInfo, isLoading, isError } = useSportCamp(reservation.sca_id)

  const canchaInfo = sportCampInfo?.camp_type_id.sca_type_name

  const campName = sportCenterInfo?.sc_name || ""

  return (
    <li className='flex flex-col w-full flex-shrink-0 max-w-[400px] gap-8 p-6 bg-white rounded-lg shadow-sh-md'>
      <header>
        {!centerLoading && !centerError && campName && (
          <p className='text-xl font-semibold text-gray-900'>{campName}</p>
        )}
        {!isLoading && !isError && canchaInfo && (
          <p className='text-gray-600'>{canchaInfo}</p>
        )}
      </header>

      <main className='text-gray-500'>
        <p>
          Fecha:{" "}
          <span className='font-medium text-gray-900'>
            {reservation.fr_schedule.s_date_reserved}
          </span>
        </p>
        <p>
          Hora de Inicio:{" "}
          <span className='font-medium text-gray-900'>
            {reservation.fr_schedule.s_start}
          </span>
        </p>
        <p>
          Hora de Fin:{" "}
          <span className='font-medium text-gray-900'>
            {reservation.fr_schedule.s_end}
          </span>
        </p>
      </main>

      <footer className='flex items-center justify-between'>
        <p className='text-gray-500'>Precio:</p>
        <p className='text-2xl font-semibold text-gray-900'>
          {formatPrice(reservation.price_total)}
        </p>
      </footer>
    </li>
  )
}
