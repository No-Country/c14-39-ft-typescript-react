import { SectionTitle } from '../components/SectionTitle'
import { UserGroupIcon, SparklesIcon, CursorArrowRaysIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const Nosotros = () => {
  return (
    <section className='wrapper animate-fade-in bg-base-green1 md:rounded-b-3xl'>
      <SectionTitle title='Sobre Reserva tu campo' />
      <article className='grid grid-cols-1 gap-2 pb-12 md:grid-cols-2 place-items-center'>
        <UserGroupIcon className='w-32 h-32 text-base-green2 md:col-start-2 md:row-start-1' />
        <div className='relative z-0 md:col-start-1 p-4 after:bg-white after:inset-0 md:after:inset-y-0 md:md:after:-inset-x-12 after:absolute after:-z-10 md:after:-skew-x-6 after:rounded-2xl md:after:shadow-[1rem_0_rgba(255,_255,_255,_0.4)]'>
          <h2 className='text-2xl font-display'>Quiénes Somos</h2>
          <p>Bienvenido a Reserva tu Campo, tu compañero de confianza en la búsqueda y reserva de canchas de fútbol. Nacimos con la visión de simplificar el proceso de encontrar el campo perfecto para disfrutar del deporte que amamos. Nos enorgullece ser el puente que conecta a los aficionados del fútbol con canchas de calidad en su localidad.</p>
        </div>
        <SparklesIcon className='w-32 h-32 text-base-green2 md:col-start-1 md:row-start-2' />
        <div className='relative z-0 p-4 md:row-start-2 md:col-start-2 after:bg-white after:inset-0 md:after:inset-y-0 md:after:-inset-x-12 after:absolute after:-z-10 md:after:-skew-x-6 after:rounded-2xl'>
          <h2 className='text-2xl font-display'>Nuestra Misión</h2>
          <p>Nuestra misión es promover el acceso fácil y conveniente a instalaciones deportivas, contribuyendo así a fomentar un estilo de vida activo y una comunidad apasionada por el fútbol. Queremos que encuentres y reserves tu cancha ideal en cuestión de minutos, permitiéndote así más tiempo para disfrutar en el campo.</p>
        </div>
        <CursorArrowRaysIcon className='w-32 h-32 text-base-green2 md:col-start-2 md:row-start-3' />
        <div className='relative z-0 md:col-start-1 md:row-start-3 p-4 after:bg-white after:inset-0 md:after:inset-y-0 md:after:-inset-x-12 after:absolute after:-z-10 md:after:-skew-x-6 after:rounded-2xl md:after:shadow-[1rem_0_rgba(255,_255,_255,_0.4)]'>
          <h2 className='text-2xl font-display'>Cómo Funcionamos</h2>
          <p>Reserva tu Campo es una plataforma intuitiva y fácil de usar. Con solo unos pocos clics, puedes descubrir canchas cerca de ti, comparar precios y reservar tu espacio en tiempo real. Estamos comprometidos en ofrecer una experiencia de reserva sin complicaciones, junto con la seguridad de una transacción segura.</p>
        </div>
        <ShieldCheckIcon className='w-32 h-32 text-base-green2 md:col-start-1 md:row-start-4' />
        <div className='relative z-0 p-4 md:col-start-2 md:row-start-4 after:bg-white after:inset-0 md:after:inset-y-0 md:after:-inset-x-12 after:absolute after:-z-10 md:after:-skew-x-6 after:rounded-2xl'>
          <h2 className='text-2xl font-display'>Nuestro Compromiso</h2>
          <p className='mb-4'>Nos esforzamos por mantener una selección diversa de canchas, garantizando así opciones para todos los gustos y presupuestos. Además, valoramos la transparencia y la honestidad en nuestros servicios, asegurando que recibas exactamente lo que esperas sin sorpresas desagradables.</p>
          <p>Con Reserva tu Campo, tu próxima experiencia futbolística está a solo unos clics de distancia. Únete a nosotros, descubre la manera más fácil de reservar tu cancha, y ¡que comience el juego!</p>
        </div>
      </article>
    </section>
  )
}
export default Nosotros
