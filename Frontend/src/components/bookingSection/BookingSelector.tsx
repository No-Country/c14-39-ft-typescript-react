import { useContext, useState, useEffect } from 'react'
import { AppContext, BookData } from '../../context/appcontext'
import { AuthContext } from '../../context/AuthContext'

import espaciosTiempo from '../../data/mockdata_timepo.json'
import { Camp, Center, UserData } from '../../types/types'

import { Calendario } from './Calendario'
import { RowTiempo } from '../form/RowItem'
import { CanchaSelector } from './CanchaSelector'
import { Stepper } from './Stepper'

import axios from 'axios'

export function BookingSelector({ proveedor }: { proveedor: Center | undefined }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedCancha, setSelectedCancha] = useState<Camp | null>(null)
  const [show, setShow] = useState<boolean>(false)

  const { saveBooking, bookingData } = useContext(AppContext)
  const { user } = useContext(AuthContext)

  // const navigate = useNavigate();

  const today = new Date()
  const minDate = new Date(today)
  const maxDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)

  useEffect(() => {
    show && bookingData && user && redirectMercadoPago(bookingData, user)
  }, [bookingData, show, user])

  function showDate(date: Date) {
    setSelectedDate(date)
  }

  function selectCancha(cancha: Camp) {
    setSelectedCancha(cancha)
  }

  function ConfirmBooking(hora: number) {
    saveBooking({
      id: String(proveedor?._id),
      fecha: selectedDate as Date,
      cancha: selectedCancha as Camp,
      // precio: proveedor?.price as number,
      hora,
    })
    setShow(true)
    // navigate(ROUTES.CONFIRM);
  }

  const redirectMercadoPago = (data: BookData, user: UserData) => {
    axios
      .post(`http://localhost:3000/api/order`, {
        fecha: data.fecha,
        hora: data.hora.toString(),
        precio: 500,
        sc_id: data.cancha.sport_center_id._id,
        camp_id: data.cancha._id,
        user_id: user.id,
      })
      .then(({ data }) => {
        window.location.href = data.initPoint
      })
      .catch(error => console.log(`${error}`))
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
              proveedor?.list_sport_camps?.map(item => (
                <CanchaSelector
                  canchaId={item._id}
                  selected={selectedCancha as Camp}
                  key={`cselector${item._id}`}
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
