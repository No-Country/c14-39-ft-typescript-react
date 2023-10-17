const Beneficios = () => {
  return (
    <section className='w-full bg-white '>
      <article className='w-full max-w-6xl my-0 mx-auto flex items-center gap-4 py-0 px-7'>
        <img
          className='w-2/5 h-full min-h-[675px] object-cover'
          src='https://via.placeholder.com/570x675'
        />

        <div className='w-full text-black text-base font-body text-balance py-20'>
          <h2 className='text-base-blue2 text-4xl font-display mb-6'>Beneficios para ti</h2>
          <h3 className='text-2xl font-bold mt-2'>Reservas fáciles y rápidas</h3>
          <p>Reserva una cancha de fútbol en minutos. ¡Es rápido y sencillo!</p>
          <h3 className='text-2xl font-bold mt-2'>Canchas de fútbol de alta calidad</h3>
          <p>Canchas de fútbol de césped natural o sintético, iluminadas y con todos los servicios.</p>
          <h3 className='text-2xl font-bold mt-2'>Ubicación conveniente</h3>
          <p>Canchas de fútbol ubicadas en el centro de la ciudad, cerca de tu casa o trabajo.</p>
          <h3 className='text-2xl font-bold mt-2'>Precios competitivos</h3>
          <p>Reserva tu cancha de fútbol a un precio asequible.</p>
          <h3 className='text-2xl font-bold mt-2'>Ofertas y promociones especiales</h3>
          <p>¡Obtén un descuento del 20% en tu primera reserva!</p>
        </div>
      </article>
    </section>
  )
}

export default Beneficios
