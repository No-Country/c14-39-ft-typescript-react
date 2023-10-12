import { useState } from 'react'
import { Button } from './Button'
import { MySelect } from './MySelect'
import { COMMON_TWSTYLES } from '../data/consts'

import mockData from '../data/mockdata.json'

export const ReservationForm = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const options = mockData.map(cancha => {
    const mappedOption: Option = {
      title: cancha?.nombre,
      id: Number(cancha?.id),
    }
    return mappedOption
  })

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value)
    const selectedOption = options.find(option => option.id === selectedId)
    console.log(selectedOption)
    setSelectedOption(selectedOption || null)
  }

  return (
    <article className='w-full max-w-6xl mx-auto my-0 px-7 font-body'>
      <form className='flex flex-col items-center gap-4 p-8 bg-white/60 rounded-3xl backdrop-blur-2xl'>
        {/*  */}
        <PreForm />
        {/*  */}

        <div className='flex flex-col gap-20 lg:flex-row'>
          {/*  */}
          <div>
            <p className='mb-3 text-lg'>Puedes empezar por tu ubicación</p>
            <div className='flex items-end gap-3'>
              <MySelect
                options={options}
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
        <div className='flex justify-center px-4 py-1 mt-7'>
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
