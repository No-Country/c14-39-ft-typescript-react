import { Button } from './Button'

export const ReservationForm = () => {
  return (
    <article className='w-full max-w-6xl mx-auto my-0 px-7 font-body'>
      <div className='flex flex-col items-center gap-4 p-8 bg-white/60 rounded-3xl backdrop-blur-2xl'>
        {/*  */}
        <div className='flex flex-col items-center text-center'>
          <p className='text-2xl'>¿Quieres jugar un partido de fútbol?</p>
          <p className='text-3xl text-base-blue1 font-display'>¡Reserva tu campo hoy mismo!</p>
        </div>
        {/*  */}

        <div className='flex flex-col gap-20 lg:flex-row'>
          {/*  */}
          <div>
            <p className='mb-3 text-lg'>Puedes empezar por tu ubicación</p>
            <form className='flex items-end gap-3'>
              <div className='flex items-center h-12 gap-1 py-3 pl-4 bg-white border-2 rounded-lg pr-9 border-base-blue1'>
                <div className='text-lg '>Selecciona tu ciudad</div>
              </div>
              <div className='w-32 flex-col   gap-1.5 flex'>
                <div className='text-base leading-tight uppercase '>Fecha</div>
                <div className=' pl-3.5 pr-12 py-3 bg-white rounded-lg border-2 border-base-blue1   gap-2 flex'>
                  <div className='h-6 text-lg grow shrink basis-0 '>Hoy</div>
                </div>
              </div>
              <div className='w-28 flex-col   gap-1.5 flex'>
                <div className='text-base leading-tight uppercase '>Hora</div>
                <div className=' pl-3.5 pr-12 py-3 bg-white rounded-lg border-2 border-base-blue1   gap-2 flex'>
                  <div className='h-6 text-lg grow shrink basis-0 '>13:00</div>
                </div>
              </div>
            </form>
          </div>
          {/*  */}
          <div className='flex flex-col justify-between w-96'>
            <p className='text-lg'>o puedes buscar tu cancha por su nombre</p>

            <input
              type='search'
              name='search'
              id='search'
              placeholder='Ej: Cancha del Faro'
              className='bg-white border-2 rounded-full border-base-blue1 pl-3.5 pr-12 py-3 placeholder:text-black text-lg'
            />
          </div>
          {/*  */}
        </div>
        <div className='flex justify-center px-4 py-1 mt-7'>
          <Button
            label='Reserva'
            style='secondary'
          />
        </div>
      </div>
    </article>
  )
}
