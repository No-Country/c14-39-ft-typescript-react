import { BUSINESS } from '../data/consts'
import { SocialIcon } from '../components/SocialIcon'

const Footer = () => {
  return (
    <footer className='w-full text-sm bg-base-blue1 text-white/60 font-body'>
      <section className='flex flex-col items-stretch justify-between gap-6 py-10 md:gap-4 md:flex-row wrapper'>
        <article className='flex flex-col justify-between md:w-1/5'>
          <h2 className='text-2xl leading-none text-base-green2 font-display'>{BUSINESS.name}</h2>
          <p>{BUSINESS.slogan}</p>
        </article>

        {/* <article className='flex flex-col gap-4'>
          <h3 className='text-2xl text-white'>Heading</h3>
          <p>Link here</p>
          <p>Link here</p>
          <p>Link here</p>
          <p>Link here</p>
        </article> */}

        <article className='flex flex-col gap-4'>
          <h3 className='mb-1 text-lg text-white'>Siguenos en redes</h3>
          <div className='flex gap-4'>
            <SocialIcon red='instagram' />
            <SocialIcon red='facebook' />
            <SocialIcon red='tiktok' />
          </div>
        </article>
      </section>
    </footer>
  )
}

export default Footer
