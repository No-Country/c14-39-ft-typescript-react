import { useState } from 'react'
import { Button } from '../Button'
import { MySelect } from '../form/MySelect'
import { COMMON_TWSTYLES, ROUTES } from '../../data/consts'
import { useNavigate } from 'react-router-dom'

import { City } from '../../types/types'

import cities from '../../data/mockdata_country.json'

export const ReservationForm = () => {
  const [selectedOption, setSelectedOption] = useState<City | null>(null)
  const options: City[] = cities.cities

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value
    const selectedOption = options.find(option => option.id === selectedId)
    setSelectedOption(selectedOption || null)
  }

  return (
    <article className='wrapper font-body'>
      <form
        className='flex flex-col items-center gap-4 p-2 md:p-8 bg-white/60 rounded-3xl backdrop-blur-2xl'
        onSubmit={() => navigate(ROUTES.FIELDS)}>
        {/*  */}
        <PreForm />
        {/*  */}

        <h2 className='w-full mt-2 mb-0'>Paso 1 de 3: Busca por ciudad, fecha y hora.</h2>

        <div className='flex flex-wrap w-full gap-8 md:flex-nowrap md:gap-20'>
          {/*  */}
          <div>
            <p className='mb-3 text-lg'>Puedes empezar por tu ubicación</p>
            <div className='flex flex-wrap items-end justify-center gap-3 md:flex-nowrap md:justify-start'>
              <MySelect
                options={cities.cities}
                value={selectedOption}
                onChange={handleChange}
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
          {/*  */}
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
          {/*  */}
        </div>
        <div className='flex justify-center px-4 py-1 md:mt-7'>
          <Button
            label='Reserva'
            style='secondary'
            type='submit'
          />
        </div>
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
