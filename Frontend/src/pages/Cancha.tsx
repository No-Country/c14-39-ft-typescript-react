import { useParams } from 'react-router-dom'
import Stripes from '../components/stripes'

import { options } from '../services/manageData'
import { CanchaData } from './CanchaData'
import { BookingSelector } from './BookingSelector'

const Cancha = () => {
  const { cancha } = useParams()
  const canchaId = Number(cancha)

  const proveedor = options.find(item => item.id === canchaId)

  return (
    <section
      className={`min-h-screen z-0 relative bg-top bg-base-green1  bg-fixed bg-cover py-24 -mt-24 flex flex-col justify-center gap-6 `}
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
