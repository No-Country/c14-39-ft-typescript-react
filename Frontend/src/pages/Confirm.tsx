import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/appcontext'

import { ROUTES } from '../data/consts'

import Stripes from '../components/stripes'
import { Button } from '../components/Button'
import SportCenterImage from '../SportCenterImage'

const Confirm = () => {
  const navigate = useNavigate()

  const { bookingData } = useContext(AppContext)

  const proveedor = bookingData?.cancha

  return (
    <section className={`min-h-screen z-0 relative bg-top bg-base-green1  bg-fixed bg-cover pt-24 pb-12 -mt-24 flex flex-col justify-center gap-6 `}>
      <SportCenterImage imageUrl={`${proveedor?.sca_imgs[0]}`} />
      <Stripes />

      <article className='flex items-center py-0 font-body wrapper'>
        <div className='flex flex-col gap-4 rounded-[2rem] md:w-1/2 '>
          <p className='text-4xl text-white font-display md:text-black'>Tu reserva ha sido realizada!</p>

          <div className='flex flex-col gap-3 pb-6 px-0 pt0 rounded-[2rem] backdrop-filter backdrop-blur-[20px] bg-white/60'>
            <div className='flex flex-col w-full gap-4 p-6 text-xl bg-white rounded-[2rem] shadow-sh-md'>
              <p className='text-2xl font-bold'>Información de la reserva:</p>

              <div className='flex flex-col gap-1'>
                <p>Lugar: {proveedor?.sport_center_id.sc_name}</p>
                <p>Cancha: {proveedor?.camp_type_id.sca_type_name}</p>
                <p>Fecha: {bookingData?.fecha.getDate()}</p>
                <p>Hora: {`${bookingData?.hora}:00`}</p>
              </div>
            </div>
            <div className='flex flex-col gap-3 px-6'>
              {/* <p>Costo de la reserva: {bookingData?.precio} USD</p> */}
              <p>Costo de la reserva: {'0'} USD</p>
              <p>Pago: Tu reserva ha sido pagada con éxito.</p>
              <p>Cancelación: Puedes cancelar tu reserva hasta 24 horas antes de la fecha y hora de la reserva.</p>
              <p>Asistencia: Te recomendamos llegar a la cancha al menos 15 minutos antes de la hora de inicio de la reserva.</p>
            </div>
            <div className='flex items-center justify-center w-full p-4'>
              <p className='text-2xl text-center font-display'>Agradecemos tu reserva.</p>
            </div>
          </div>
          <div className='flex justify-center p-2.5'>
            <Button
              style='primary'
              label='Volver al Home'
              onClick={() => navigate(ROUTES.HOME)}
            />
          </div>
        </div>
      </article>
    </section>
  )
}

export default Confirm
