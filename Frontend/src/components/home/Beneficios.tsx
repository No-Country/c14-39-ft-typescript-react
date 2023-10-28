import { MapPinIcon, ClockIcon, FaceSmileIcon, BanknotesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { BeneficiosCard } from './BeneficiosCard'

export const BeneficiosList = [
  {
    titulo: 'Reservas fáciles y rápidas',
    contenido: 'Reserva una cancha de fútbol en minutos. ¡Es rápido y sencillo!',
    Icono: ClockIcon,
  },
  {
    titulo: 'Canchas de fútbol de alta calidad',
    contenido: 'Canchas de fútbol de césped natural o sintético, iluminadas y con todos los servicios.',
    Icono: ShieldCheckIcon,
  },
  {
    titulo: 'Ubicación conveniente',
    contenido: 'Canchas de fútbol ubicadas en el centro de la ciudad, cerca de tu casa o trabajo.',
    Icono: MapPinIcon,
  },
  {
    titulo: 'Precios competitivos',
    contenido: 'Reserva tu cancha de fútbol a un precio asequible.',
    Icono: BanknotesIcon,
  },
  {
    titulo: 'Ofertas y promociones especiales',
    contenido: '¡Obtén un descuento del 20% en tu primera reserva!',
    Icono: FaceSmileIcon,
  },
]

const Beneficios = () => {
  return (
    <section
      className='w-full bg-white'
      id='beneficios'>
      <article className='items-center gap-4 py-0 md:flex wrapper'>
        <img
          className='rounded-3xl md:rounded-t-3xl md:rounded-b-none mx-0 w-full max-w-screen-sm md:w-2/5 h-auto md:h-full md:min-h-[675px] object-cover'
          src='./images/beneficios_img.webp'
        />

        <div className='flex flex-col w-full gap-4 py-2 text-base text-black md:py-10 text-balance'>
          <h2 className='text-3xl md:text-4xl text-base-blue2 font-display'>Beneficios para ti</h2>

          {BeneficiosList.map(item => (
            <BeneficiosCard
              titulo={item.titulo}
              contenido={item.contenido}
              Icono={item.Icono}
              key={item.titulo}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default Beneficios
