import { SectionTitle } from '../components/SectionTitle'
import { BeneficiosList } from '../components/home/Beneficios'
import { BeneficiosCard } from '../components/home/BeneficiosCard'

const Beneficios = () => {
  return (
    <section className='wrapper animate-fade-in'>
      <SectionTitle title='Beneficios para ti' />
      <article className='flex flex-col items-center gap-4 pb-4 '>
        <img
          className='object-cover w-full h-full mx-0 aspect-[4/1] rounded-3xl '
          src='./images/beneficios_img.webp'
        />
        <div className='grid w-full grid-cols-3 gap-4 py-2 text-base text-black text-balance'>
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
