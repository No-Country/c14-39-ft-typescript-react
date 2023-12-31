import { useContext, useState, useEffect } from "react"
import { AppContext, BookData } from "../../context/appcontext"
import { AuthContext } from "../../context/AuthContext"

import espaciosTiempo from "../../data/mockdata_timepo.json"
import { Camp, Center, UserData } from "../../types/types"

import { Calendario } from "./Calendario"
import { RowTiempo } from "../form/RowItem"
import { CanchaSelector } from "./CanchaSelector"
import { Stepper } from "./Stepper"

import instance from "../../api/axios"

import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
import { FALLBACKS } from "../../data/consts"
import { formatPrice } from "../../utils/utils"

export function BookingSelector({
  proveedor,
}: {
  proveedor: Center | undefined
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedCancha, setSelectedCancha] = useState<Camp | null>(null)
  const [show, setShow] = useState<boolean>(false)

  const MySwal = withReactContent(Swal)

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

  async function ConfirmBooking(hora: number) {
    const precio = selectedCancha?.sca_price || FALLBACKS.CAMP_PRICE
    const precioFormatted = formatPrice(precio, selectedCancha?.sca_price_ISO)

    const result = await MySwal.fire({
      title: `Reserva: 
       ${selectedCancha?.sport_center_id.sc_name}: ${
        selectedCancha?.camp_type_id.sca_type_name
      } 
      Día: ${selectedDate?.toLocaleDateString()} 
      Hora: ${hora}:00 
      Precio: ${precioFormatted} 
      ¿Desea continuar al pago?`,
      icon: "warning",
      showCancelButton: true,

      cancelButtonText: "No",
      confirmButtonText: "Sí",
      customClass: {
        confirmButton: "custom-primary",
        cancelButton: "custom-secondary",
        popup: "custom-popup",
      },
    })
    if (result.isConfirmed) {
      saveBooking({
        id: String(proveedor?._id),
        fecha: selectedDate as Date,
        cancha: selectedCancha as Camp,
        precio,
        hora,
      })
      setShow(true)
    }
    // navigate(ROUTES.CONFIRM);
  }

  const redirectMercadoPago = (data: BookData, user: UserData) => {
    const fechaActual = new Date() // Obtiene la fecha y hora actual

    // Formatea la fecha como una cadena en el formato "YYYY-MM-DD"
    const fechaFormateada = fechaActual
      .toISOString()
      .split("T")[0]
      .concat("T24:00:00.000Z")

    Promise.all([
      instance.post("/order", {
        fecha: fechaActual.toString(),
        hora: data.hora.toString().concat(":00:00"),
        precio: data.precio,
        sc_id: data.cancha.sport_center_id._id,
        camp_id: data.cancha._id,
        user_id: user.id,
      }),
      instance.post("/reservation", {
        fr_date_reservation: fechaActual,
        fr_status: "RESERVADO",
        fr_schedule: {
          s_date_reserved: fechaFormateada,
          s_start: data.hora.toString().concat(":00:00"),
          s_end: (data.hora + 1).toString().concat(":00:00"),
        },
        user_id: user.id,
        sc_id: data.cancha.sport_center_id._id,
        sca_id: data.cancha._id,
      }),
    ])
      .then(([order, reservation]) => {
        if (reservation.status === 200) {
          window.location.href = order.data.initPoint
        }
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
        {!selectedDate && (
          <div className='flex flex-col items-center justify-center p-1 mb-1 rounded-xl bg-white text-red-500'>
            <p className='text-xs text-center'>
              Selecciona un día
              </p>
              </div>
              )}
          <Calendario
            minDate={minDate}
            maxDate={maxDate}
            showDate={showDate}
          />
        </div>
        
        <div className='px-2 py-4 rounded-lg bg-white/60'>
        {/* {!selectedDate && (
          <div className='flex flex-col items-center justify-center gap-4 p-4 rounded-lg bg-white/60 text-red-500'>
            <p className='text-l text-center'>
              Selecciona un día
              </p>
              </div>
              )} */}
          <div className='grid items-start w-full gap-2 md:w-auto lg:grid-cols-2'>
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
          <div className='text-xl md:text-3xl '>
            {selectedCancha?.camp_type_id.sca_type_name}
          </div>
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
