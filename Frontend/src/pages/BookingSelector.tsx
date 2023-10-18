import espaciosTiempo from '../data/mockdata_timepo.json'
import { Proveedor } from '../types/types'

import { Calendario } from './Calendario'

function showDate(date: Date) {
  console.log(date)
}

export function BookingSelector({ proveedor }: { proveedor: Proveedor | undefined }) {
  const today = new Date()
  const minDate = new Date(today)
  const maxDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)
  return (
    <article className='wrapper'>
      <div className='grid grid-cols-[auto_1fr_1fr] content-start gap-4 p-8 rounded-[2rem] backdrop-filter backdrop-blur-[20px] w-full bg-white/60'>
        <div className=''>
          <Calendario
            minDate={minDate}
            maxDate={maxDate}
            showDate={showDate}
          />
        </div>

        <div className='px-2 py-4 rounded-lg bg-white/60'>
          <div className='grid items-start grid-cols-2 gap-2'>
            {proveedor?.canchas.map(item => (
              <div className='grid grid-cols-[auto_1fr] gap-2 bg-white rounded-2xl '>
                <img
                  className='object-cover w-12 h-full rounded-bl-2xl rounded-tl-2xl'
                  src={item.imagen}
                />
                <div className='flex flex-col justify-center flex-1 py-2 pr-2'>
                  <p key={item.nombre}>{item.nombre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='tiempos'>
          <div className='text-3xl '>Espacios</div>
          {espaciosTiempo.map(item => (
            <p key={item.hora}>{item.hora}</p>
          ))}
        </div>
      </div>
    </article>
  )
}
