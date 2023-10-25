import { useParams } from 'react-router-dom'
import Stripes from '../components/stripes'

import { CanchaData } from '../components/CanchaData'
import { BookingSelector } from '../components/bookingSection/BookingSelector'
import { useSportCenter } from '../data/useSportData'
import { FALLBACKS } from '../data/consts'

const Cancha = () => {
  const { cancha } = useParams()

  const { sportCenterInfo, isLoading, isError, errorMessage } = useSportCenter(cancha as string)

  const imgOnError = () => {
    // e.currentTarget.src = FALLBACKS.SPORT_CAMP
    console.log('error with the image')
  }

  return (
    <section
      className='relative z-0 flex flex-col justify-center min-h-screen gap-6 py-24 -mt-24 bg-fixed bg-top bg-cover bg-base-green1 animate-fade-in'
      // style={{ backgroundImage: `url(${sportCenterInfo?.sc_imgs[0]})` }}
    >
      <img
        src={`url(${FALLBACKS.SPORT_CENTER})`}
        alt='Esta imagen'
        className='fixed inset-0 object-cover w-full h-full'
      />
      {/* <img
        src={`url(${sportCenterInfo?.sc_imgs[0]})`}
        onError={imgOnError}
        alt='Esta imagen'
        className='fixed inset-0 object-cover w-full h-full'
      /> */}
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
