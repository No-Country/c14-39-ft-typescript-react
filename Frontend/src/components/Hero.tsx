import { HeroContent } from './HeroContent'
import { ReservationForm } from './ReservationForm'
import Stripes from './stripes'

const Hero = () => {
  return (
    <section className='min-h-screen z-0 relative bg-[url(images/hero_bg.webp)] bg-top bg-base-green1 bg-blend-multiply bg-fixed bg-cover py-24 -mt-24 flex flex-col justify-center gap-6 after:h-20 after:absolute after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-t after:from-white after:to-transparent'>
      <Stripes />
      <HeroContent />
      <ReservationForm />
    </section>
  )
}

export default Hero
