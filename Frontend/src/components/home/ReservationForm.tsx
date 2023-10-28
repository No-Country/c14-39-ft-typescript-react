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
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const ReservationForm = () => {
  const {isLogged} = useContext(AuthContext)
  const MySwal = withReactContent(Swal);
  const [selectedOption, setSelectedOption] = useState<City | null>(null)

  const { citiesData, isLoading, isError } = useCities()
  const { setCity } = useContext(AppContext)

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value
    const selectedOption = citiesData?.find(option => option.id === selectedId)
    setSelectedOption(selectedOption || null)
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    setCity(data.city as string)
    if(!isLogged){
     await MySwal.fire({
        icon: 'warning',
        title: 'Debes iniciar sesión para continuar',
        showConfirmButton: false,
        timer: 3000
      })      
            navigate(ROUTES.LOGIN)
    }
    navigate(ROUTES.FIELDS)
  }

  return (
    <article className='wrapper font-body'>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Algo ha ocurrido, intenta de nuevo actualizando la página.</p>}
      {!isError && !isLoading && citiesData && (
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

          <div className='flex flex-wrap w-full gap-8 md:flex-nowrap md:gap-20'>
            <div>
              <p className='mb-3 text-lg'>Puedes empezar por tu ubicación</p>
              <div className='flex flex-wrap items-end justify-center gap-3 md:flex-nowrap md:justify-start'>
                <MySelect
                  options={citiesData}
                  value={selectedOption}
                  onChange={handleChange}
                  name='city'
                />

                <div className='w-32 flex-col gap-1.5 flex'>
                  <label
                    htmlFor='date'
                    className='text-base leading-tight uppercase '>
                    Fecha
                  </label>
                  <input
                    type='date'
                    name='date'
                    id='date'
                    className={COMMON_TWSTYLES.input}
                    placeholder='Hoy'
                  />
                </div>
                <div className='w-32 flex-col gap-1.5 flex'>
                  <label
                    htmlFor='time'
                    className='text-base leading-tight uppercase '>
                    Hora
                  </label>
                  <input
                    type='time'
                    name='time'
                    id='time'
                    className={COMMON_TWSTYLES.input}
                    placeholder='13:00'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-between w-96'>
              <p className='text-lg'>o puedes buscar tu cancha por su nombre</p>

              <input
                type='search'
                name='search'
                id='search'
                placeholder='Ej: Cancha del Faro'
                className={COMMON_TWSTYLES.search}
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
        </form>
      )}
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
