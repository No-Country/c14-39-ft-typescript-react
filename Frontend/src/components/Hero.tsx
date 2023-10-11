import { HeroContent } from './HeroContent'
import { ReservationForm } from './ReservationForm'
import Stripes from './stripes'

const Hero = () => {
  return (
    <section className='min-h-screen z-0 relative bg-[url(images/hero_bg.webp)] bg-top bg-base-green1 bg-blend-multiply bg-fixed bg-cover pt-24 flex flex-col justify-center'>
      <Stripes />
      <HeroContent />
      <ReservationForm />
    </section>
  )
}

export default Hero
