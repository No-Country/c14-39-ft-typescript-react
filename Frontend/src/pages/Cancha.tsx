import { useParams } from 'react-router-dom'
import Stripes from '../components/stripes'

import { CanchaData } from '../components/CanchaData'
import { BookingSelector } from '../components/bookingSection/BookingSelector'
import { useSportCenter } from '../data/useSportData'
import SportCenterImage from '../SportCenterImage'

const Cancha = () => {
  const { cancha } = useParams()

  const { sportCenterInfo, isLoading, isError, errorMessage } = useSportCenter(cancha as string)

  return (
    <section className='relative z-0 flex flex-col justify-center min-h-screen gap-6 py-24 -mt-24 bg-fixed bg-top bg-cover bg-base-green1 animate-fade-in'>
      <SportCenterImage imageUrl={`${sportCenterInfo?.sc_imgs[0]}`} />

      <Stripes />
      {isLoading ? <p>Cargando...</p> : null}
      {isError ? <p>{errorMessage}</p> : null}
      {sportCenterInfo && !isLoading && !isError ? (
        <>
          <CanchaData proveedor={sportCenterInfo} />
          <BookingSelector proveedor={sportCenterInfo} />
        </>
      ) : null}
    </section>
  )
}
export default Cancha
