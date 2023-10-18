import { useParams } from 'react-router-dom'
import Stripes from '../components/stripes'
import { Button } from '../components/Button'

import { options } from '../services/manageData'
import espaciosTiempo from '../data/mockdata_timepo.json'
import { Proveedor } from '../types/types'

const Cancha = () => {
  const { cancha } = useParams()
  const canchaId = Number(cancha)

  const proveedor = options.find(item => item.id === canchaId)

  return (
    <section
      className={`min-h-screen z-0 relative bg-top bg-base-green1  bg-fixed bg-cover py-24 -mt-24 flex flex-col justify-center gap-6 `}
      style={{ backgroundImage: `url(${proveedor?.imagen})` }}>
      <Stripes />
      {proveedor ? <CanchaData proveedor={proveedor} /> : null}
      <article className='wrapper'>
        <div className='grid grid-cols-3 gap-4 p-8 rounded-[2rem] backdrop-filter backdrop-blur-[20px] w-full bg-white/60'>
          <div className='h-24 bg-white rounded-lg shadow-sh-md'></div>
          <div className='px-2 py-4 rounded-lg bg-white/60'>
            {proveedor?.canchas.map(item => (
              <p key={item.nombre}>{item.nombre}</p>
            ))}
          </div>
          <div className='tiempos'>
            <div className='text-3xl '>Espacios</div>
            {espaciosTiempo.map(item => (
              <p key={item.hora}>{item.hora}</p>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

function CanchaData({ proveedor }: { proveedor: Proveedor | undefined }) {
  const provInstalaciones = `${proveedor?.canchas.length} canchas | ${proveedor?.instalaciones.join(', ')}`
  return (
    <article className='flex items-center py-0 font-body wrapper'>
      <div className='flex flex-col w-1/2 gap-3 '>
        <h1 className='text-6xl font-display '>{proveedor?.nombre}</h1>
        <p>
          <strong>Ubicación:</strong> {proveedor?.ubicacion}
        </p>
        <p>
          <strong>Tamaño:</strong> {proveedor?.tamano} m<sup>2</sup>
        </p>
        <p>
          <strong>Instalaciones:</strong> {provInstalaciones}
        </p>
        <div className='flex justify-center'>
          <Button label='Ver más datos' />
        </div>
      </div>
    </article>
  )
}

export default Cancha
