import { useContext, useState } from 'react'
import { AppContext } from '../../context/appcontext'

import espaciosTiempo from '../../data/mockdata_timepo.json'
import { Camp, ListSportCenter } from '../../types/types'

import { Calendario } from './Calendario'
import { RowTiempo } from '../form/RowItem'
import { CanchaSelector } from './CanchaSelector'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../data/consts'
import { Stepper } from './Stepper'

export function BookingSelector({ proveedor }: { proveedor: ListSportCenter | undefined }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedCancha, setSelectedCancha] = useState<Camp | null>(null)

  const { saveBooking } = useContext(AppContext)

  const navigate = useNavigate()

  const today = new Date()
  const minDate = new Date(today)
  const maxDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)

  function showDate(date: Date) {
    setSelectedDate(date)
  }

  function selectCancha(cancha: Camp) {
    setSelectedCancha(cancha)
  }

  // function reset() {
  //   setSelectedDate(null)
  //   setSelectedCancha(null)
  // }

  function ConfirmBooking(hora: number) {
    saveBooking({
      id: String(proveedor?._id),
      fecha: selectedDate as Date,
      cancha: selectedCancha?.camp_type_id.sca_type_name as string,
      // precio: proveedor?.price as number,
      hora,
    })
    navigate(ROUTES.CONFIRM)
  }

  return (
    <article className='wrapper'>
      <div className='grid md:grid-cols-[auto_1fr_1fr]  content-start gap-4 p-4 md:p-8 rounded-[2rem] backdrop-filter backdrop-blur-[20px] w-full bg-white/60'>
        <Stepper
          paso={3}
          total={3}
          mensaje='Confirma fecha, cancha y hora.'
          overrideClasses='col-span-1 md:col-span-3'
        />
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
              proveedor?.list_sport_camps.map(item => (
                <CanchaSelector
                  canchaId={item}
                  selected={selectedCancha as Camp}
                  key={`cselector${item}`}
                  onSelectCancha={p => selectCancha(p)}
                />
              ))}
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='text-xl md:text-3xl '>{selectedCancha?.camp_type_id.sca_type_name}</div>
          {selectedCancha &&
            espaciosTiempo.map(item => (
              <RowTiempo
                key={item.hora}
                title={String(`${item.hora}:00`)}
                onClick={() => ConfirmBooking(item.hora)}
              />
            ))}
        </div>
      </div>
    </article>
  )
}
