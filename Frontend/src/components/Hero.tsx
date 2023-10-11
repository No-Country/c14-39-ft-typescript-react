import Stripes from './stripes'

const Hero = () => {
  return (
    <section className='min-h-screen z-0 relative bg-[url(images/hero_bg.webp)] bg-top bg-base-green1 bg-blend-multiply bg-fixed bg-cover pt-24 flex flex-col justify-center'>
      <Stripes className={`text-base-green1 fixed top-0 left-0 h-full -z-10`} />
      <div className='flex w-full max-w-6xl my-0 mx-auto items-center gap-4 py-0 px-7'>
        <div className='flex flex-col w-1/2 items-start gap-3 '>
          <h1 className='font-display text-base-black text-6xl leading-[60.7px] '>Reserva tu campo</h1>
          <p className='font-body text-black text-2xl'>La forma más fácil de reservar canchas de fútbol</p>
          <p className='font-body text-black text-base'>Reserva tu campo es una plataforma que te permite reservar canchas de fútbol de forma rápida y sencilla. Con nosotros, puedes encontrar canchas cerca de ti, comparar precios y reservar tu cancha en minutos.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
