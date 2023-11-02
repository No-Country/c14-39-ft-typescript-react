import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/appcontext'

import { Button } from '../Button'
import { MySelect } from '../form/MySelect'
import { Stepper } from '../bookingSection/Stepper'

import { City } from '../../types/types'
import { COMMON_TWSTYLES, ROUTES } from '../../data/consts'

import { useCities } from '../../data/useSportData'
import { AuthContext } from '../../context/AuthContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ReservationFormSkeleton } from '../bookingSection/Skeletons'

export const ReservationForm = () => {
  const { isLogged } = useContext(AuthContext)
  const MySwal = withReactContent(Swal)
  const [selectedOption, setSelectedOption] = useState<City | null>(null)

  const { citiesData, isLoading, isError } = useCities()
  const { setCity } = useContext(AppContext)

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value
    const selectedOption = citiesData?.find(option => option.id === selectedId)
    setSelectedOption(selectedOption || null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    setCity(data.city as string)
    if (!isLogged) {
      await MySwal.fire({
        icon: 'warning',
        title: 'Debes iniciar sesión para continuar',
        showConfirmButton: false,
        timer: 3000,
      })
      navigate(ROUTES.LOGIN)
    }
    navigate(ROUTES.FIELDS)
  }

  return (
    <article className='wrapper font-body'>
      <form
        className='flex flex-col items-center gap-4 p-2 md:p-8 bg-white/60 rounded-3xl backdrop-blur-2xl'
        onSubmit={e => handleSubmit(e)}>
        <PreForm />

        <Stepper
          paso={1}
          total={3}
          mensaje='Busca por ciudad, fecha y hora.'
          overrideClasses='mb-2'
        />

        {isLoading && <ReservationFormSkeleton />}
        {isError && <p>Algo ha ocurrido, intenta de nuevo actualizando la página.</p>}
        {!isError && !isLoading && citiesData && (
          <>
            <div className='grid w-full gap-8 md:grid-cols-2 md:flex-nowrap md:gap-20'>
              <div className='flex flex-col justify-between w-full'>
                <p className='mb-3 text-lg'>Puedes empezar por tu ubicación</p>
                <MySelect
                  options={citiesData}
                  value={selectedOption}
                  onChange={handleChange}
                  name='city'
                />
              </div>

              <div className='flex flex-col justify-between w-full '>
                <p className='text-lg'>Pronto, podrás buscar por el nombre de tu centro favorito!</p>

                <input
                  type='search'
                  name='search'
                  id='search'
                  placeholder='Ej: Cancha del Faro'
                  className={`${COMMON_TWSTYLES.search} opacity-50 pointer-events-none`}
                />
              </div>
            </div>
            <div className='flex justify-center px-4 py-1 md:mt-7'>
              <Button
                label='Reserva'
                style='secondary'
                type='submit'
              />
            </div>
          </>
        )}
      </form>
    </article>
  )
}

export const PreForm = () => {
  return (
    <div className='flex flex-col items-center text-center'>
      <p className='text-2xl'>¿Quieres jugar un partido de fútbol?</p>
      <p className='text-3xl text-base-blue1 font-display'>¡Reserva tu campo hoy mismo!</p>
    </div>
  )
}
