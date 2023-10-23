import { useParams } from 'react-router-dom'
import Stripes from '../components/stripes'

import { options } from '../services/manageData'
import { CanchaData } from '../components/CanchaData'
import { BookingSelector } from '../components/bookingSection/BookingSelector'

const Cancha = () => {
  const { cancha } = useParams()
  const canchaId = Number(cancha)

  const proveedor = options.find(item => item.id === canchaId)

  return (
    <section
      className='relative z-0 flex flex-col justify-center min-h-screen gap-6 py-24 -mt-24 bg-fixed bg-top bg-cover bg-base-green1 animate-fade-in'
      style={{ backgroundImage: `url(${proveedor?.imagen})` }}>
      <Stripes />
      {proveedor ? (
        <>
          <CanchaData proveedor={proveedor} />
          <BookingSelector proveedor={proveedor} />
        </>
      ) : null}
    </section>
  )
}
export default Cancha
