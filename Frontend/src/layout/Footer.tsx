import { BUSINESS } from '../consts/consts'
import { SocialIcon } from '../components/SocialIcon'

const Footer = () => {
  return (
    <footer className='w-full text-sm bg-base-blue1 text-white/60 font-body'>
      <section className='flex items-stretch justify-between w-full max-w-6xl gap-4 py-16 mx-auto my-0 px-7'>
        <article className='flex flex-col justify-between w-1/5'>
          <h2 className='text-2xl leading-none text-base-green2 font-display'>{BUSINESS.name}</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintelit officia consequat</p>
        </article>

        <article className='flex flex-col gap-4'>
          <h3 className='text-2xl text-white'>Heading</h3>
          <p>Link here</p>
          <p>Link here</p>
          <p>Link here</p>
          <p>Link here</p>
        </article>

        <article className='flex flex-col gap-4'>
          <h3 className='mb-3 text-2xl text-white'>Siguenos en redes</h3>
          <div className='flex gap-4'>
            <SocialIcon />
            <SocialIcon />
            <SocialIcon />
          </div>
        </article>
      </section>
    </footer>
  )
}

export default Footer
