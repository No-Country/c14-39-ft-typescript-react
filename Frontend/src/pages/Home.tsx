<<<<<<< HEAD
import Hero from '../components/home/Hero'
import Beneficios from '../components/home/Beneficios'
import Patrocinadores from '../components/home/Patrocinadores'
import PromoSection from '../components/home/PromoSection'

const Home = () => {
  return (
    <>
      <Hero />
      <Beneficios />
      <Patrocinadores />
      <PromoSection />
    </>
  )
}

export default Home
=======
import Hero from '../components/home/Hero'
import Beneficios from '../components/home/Beneficios'
import Patrocinadores from '../components/home/Patrocinadores'
import PromoSection from '../components/home/PromoSection'

const Home = () => {
  return (
    <section className='animate-fade-in'>
      <Hero />
      <Beneficios />
      <Patrocinadores />
      <PromoSection />
    </section>
  )
}

export default Home
>>>>>>> 16e60dcf50191f04003ae3cd75cb1fd2e197c42e
