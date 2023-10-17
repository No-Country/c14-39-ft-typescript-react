import { NavLink } from 'react-router-dom'
import { Button } from '../components/Button'
import { ROUTES } from '../data/consts'
import { GoogleBtn } from './form/GoogleBtn'
import { EmailInput } from './form/EmailInput'
import { PasswordInput } from './form/PasswordInput'

const Registro = () => {
  return (
    <section className='wrapper'>
      <h1 className='text-6xl text-center font-display'>¡Bienvenido!</h1>
      <div className='max-w-xs gap-8 mx-auto my-0'>
        <form className='flex flex-col gap-6 h-80 rounded-xl'>
          <EmailInput />

          <PasswordInput />

          <Button
            label='Regístrate'
            type='submit'
            style='secondary'
            override='w-full'
          />

          <GoogleBtn />
          <div className='flex justify-center gap-1'>
            <div>¿Ya tienes una cuenta?</div>

            <NavLink
              to={ROUTES.LOGIN}
              className='font-bold text-base-blue2'>
              Ingresa
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Registro
