import { HeroContent } from './HeroContent'
import { ReservationForm } from './ReservationForm'
import Stripes from '../stripes'

const Hero = () => {
  return (
    <section className='relative z-0 flex flex-col justify-center min-h-screen gap-6 py-24 -mt-24 bg-fixed bg-top bg-cover md:bg-hero-image bg-base-green1 bg-blend-multiply after:h-20 after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-t after:from-white after:to-transparent'>
      <Stripes />
      <HeroContent />
      <ReservationForm />
    </section>
  )
}

export default Hero
