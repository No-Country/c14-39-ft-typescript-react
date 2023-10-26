import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ROUTES } from '../data/consts'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useForm } from 'react-hook-form'
import { EmailInput, PasswordInput } from '../components/form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

interface IFormInput {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const { signIn, errors, isLogged, message, setMessage } = useContext(AuthContext)
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)

  const emailError = errors.find(error => error.toLowerCase().includes('email'))
  const passwordError = errors?.find(error => error.toLowerCase().includes('contraseña'))

  const onSubmit = async (data: IFormInput) => {
    try {
      await signIn(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const checkLoginAndNavigate = async () => {
      if (isLogged) {
        await MySwal.fire({
          icon: 'success',
          title: `${message}`,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'custom-popup',
          },
        })
        setMessage('')
        navigate(ROUTES.HOME)
      }
    }

    checkLoginAndNavigate()
  }, [isLogged])

  return (
    <section className='wrapper'>
      <h1 className='mb-6 text-4xl text-center md:text-6xl font-display'>¡Bienvenido!</h1>
      <div className='max-w-xs gap-8 mx-auto my-0'>
        <form
          className='flex flex-col gap-6 h-80 rounded-xl'
          onSubmit={handleSubmit(data => onSubmit(data))}>
          <EmailInput
            register={register('email')}
            error={emailError}
          />

          <PasswordInput
            register={register('password')}
            error={passwordError}
          />

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
