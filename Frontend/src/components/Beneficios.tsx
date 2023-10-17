const Beneficios = () => {
  return (
    <section className='w-full bg-white '>
      <article className='flex items-center gap-4 py-0 wrapper'>
        <img
          className='w-2/5 h-full min-h-[675px] object-cover'
          src='./images/beneficios_img.webp'
        />

        <div className='w-full py-20 text-base text-black text-balance'>
          <h2 className='mb-6 text-4xl text-base-blue2 font-display'>Beneficios para ti</h2>
          <h3 className='mt-2 text-2xl font-bold'>Reservas fáciles y rápidas</h3>
          <p>Reserva una cancha de fútbol en minutos. ¡Es rápido y sencillo!</p>
          <h3 className='mt-2 text-2xl font-bold'>Canchas de fútbol de alta calidad</h3>
          <p>Canchas de fútbol de césped natural o sintético, iluminadas y con todos los servicios.</p>
          <h3 className='mt-2 text-2xl font-bold'>Ubicación conveniente</h3>
          <p>Canchas de fútbol ubicadas en el centro de la ciudad, cerca de tu casa o trabajo.</p>
          <h3 className='mt-2 text-2xl font-bold'>Precios competitivos</h3>
          <p>Reserva tu cancha de fútbol a un precio asequible.</p>
          <h3 className='mt-2 text-2xl font-bold'>Ofertas y promociones especiales</h3>
          <p>¡Obtén un descuento del 20% en tu primera reserva!</p>
        </div>
      </article>
    </section>
  )
}

export default Beneficios
