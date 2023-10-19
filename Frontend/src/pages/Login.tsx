import { NavLink } from 'react-router-dom'
import { Button } from '../components/Button'
import { ROUTES } from '../data/consts'
import { GoogleBtn } from '../components/form/GoogleBtn'
import { EmailInput } from '../components/form/EmailInput'
import { PasswordInput } from '../components/form/PasswordInput'

const Login = () => {
  return (
    <section className='wrapper'>
      <h1 className='text-6xl text-center font-display'>¡Bienvenido!</h1>
      <div className='max-w-xs gap-8 mx-auto my-0'>
        <form className='flex flex-col gap-6 h-80 rounded-xl'>
          <EmailInput />

          <PasswordInput />

          <NavLink
            to={ROUTES.SIGN_UP}
            className='font-bold text-center text-base-blue2'>
            ¿Olvidaste tu contraseña?
          </NavLink>

          <Button
            label='Ingresa'
            type='submit'
            style='secondary'
            override='w-full'
          />

          <GoogleBtn />
          <div className='flex justify-center gap-1'>
            <div>¿No tienes una cuenta?</div>

            <NavLink
              to={ROUTES.SIGN_UP}
              className='font-bold text-base-blue2'>
              Regístrate
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
