import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

const NotFound = () => {
  const navigate = useNavigate()
  function Volver() {
    navigate('/')
  }
  return (
    <section className='grid h-[80dvh] wrapper place-items-center'>
      <article className='flex flex-col items-center gap-4'>
        <img
          src='https://media.tenor.com/4U5EUq2XJnoAAAAd/kepa-chelsea-fc.gif'
          alt='404'
          className='rounded-3xl'
        />
        <h1 className='text-4xl text-center font-display text-base-blue1'>Noo, esta página no existe!</h1>
        <Button
          label='Vuelve al inicio para resevar tu cancha'
          style='secondary'
          onClick={() => Volver()}
        />
      </article>
    </section>
  )
}

export default NotFound
