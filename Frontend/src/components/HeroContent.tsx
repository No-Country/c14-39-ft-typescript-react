import { BUSINESS } from '../data/consts'

export const HeroContent = () => {
  return (
    <article className='flex items-center py-0 font-body wrapper'>
      <div className='flex flex-col w-1/2 gap-3 '>
        <h1 className='text-6xl font-display '>{BUSINESS.name}</h1>
        <p className='text-2xl'>{BUSINESS.slogan}</p>
        <p className='text-base'>Reserva tu campo es una plataforma que te permite reservar canchas de fútbol de forma rápida y sencilla. Con nosotros, puedes encontrar canchas cerca de ti, comparar precios y reservar tu cancha en minutos.</p>
      </div>
    </article>
  )
}
