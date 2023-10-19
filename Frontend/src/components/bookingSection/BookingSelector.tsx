import { useState } from 'react'

import espaciosTiempo from '../../data/mockdata_timepo.json'
import { Cancha, Proveedor } from '../../types/types'

import { Calendario } from './Calendario'
import { RowTiempo } from '../RowItem'
import { CanchaSelector } from './CanchaSelector'

export function BookingSelector({ proveedor }: { proveedor: Proveedor | undefined }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedCancha, setSelectedCancha] = useState<Cancha | null>(null)

  const today = new Date()
  const minDate = new Date(today)
  const maxDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)

  function showDate(date: Date) {
    setSelectedDate(date)
  }

  function selectCancha(cancha: Cancha) {
    setSelectedCancha(cancha)
  }

  return (
    <article className='wrapper'>
      <div className='grid md:grid-cols-[auto_1fr_1fr] content-start gap-4 p-4 md:p-8 rounded-[2rem] backdrop-filter backdrop-blur-[20px] w-full bg-white/60'>
        <div className=''>
          <Calendario
            minDate={minDate}
            maxDate={maxDate}
            showDate={showDate}
          />
        </div>

        <div className='px-2 py-4 rounded-lg bg-white/60'>
          <div className='grid items-start w-full gap-2 md:w-auto md:grid-cols-2'>
            {selectedDate &&
              proveedor?.canchas.map(item => (
                <CanchaSelector
                  cancha={item}
                  selected={selectedCancha as Cancha}
                  key={item.nombre}
                  onSelectCancha={() => selectCancha(item)}
                />
              ))}
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='text-xl md:text-3xl '>{selectedCancha?.nombre}</div>
          {selectedCancha &&
            espaciosTiempo.map(item => (
              <RowTiempo
                key={item.hora}
                title={String(`${item.hora}:00`)}
              />
            ))}
        </div>
      </div>
    </article>
  )
}
