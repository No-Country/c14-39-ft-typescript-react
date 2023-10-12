import { BUSINESS } from '../data/consts'

export const HeroContent = () => {
  return (
    <article className='flex items-center w-full max-w-6xl py-0 mx-auto my-0 px-7 font-body'>
      <div className='flex flex-col w-1/2 gap-3 '>
        <h1 className='text-6xl font-display '>{BUSINESS.name}</h1>
        <p className='text-2xl'>{BUSINESS.slogan}</p>
        <p className='text-base'>Reserva tu campo es una plataforma que te permite reservar canchas de fútbol de forma rápida y sencilla. Con nosotros, puedes encontrar canchas cerca de ti, comparar precios y reservar tu cancha en minutos.</p>
      </div>
    </article>
  )
}
