import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { EmailInput, PasswordInput, NameInput, LastNameInput } from '../components/form'
import { Button } from '../components/Button'
import { ROUTES } from '../data/consts'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../context/AuthContext'

interface IFormInput {
  name: string
  lastname: string
  email: string
  password: string
}

const Registro: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const { signUp, errors, isLogged } = useContext(AuthContext)
  const navigate = useNavigate()

  // Identifica el mensaje de error para cada campo
  const nameError = errors.find(error => error.toLowerCase().includes('nombre'))
  const lastnameError = errors.find(error => error.toLowerCase().includes('apellido'))
  const emailError = errors.find(error => error.toLowerCase().includes('email'))
  const passwordError = errors.find(error => error.toLowerCase().includes('contraseña'))

  const onSubmit = async (data: IFormInput) => {
    try {
      console.log(data)
      console.log(signUp)
      await signUp(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (isLogged) navigate(ROUTES.HOME)
  }, [isLogged])

  return (
    <section className='wrapper'>
      <h1 className='mb-6 text-4xl text-center md:text-6xl font-display'>¡Bienvenido!</h1>
      <div className='max-w-xs gap-8 mx-auto my-0'>
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
          <NameInput
            register={register('name')}
            error={nameError}
          />

          <LastNameInput
            register={register('lastname')}
            error={lastnameError}
          />

          <EmailInput
            register={register('email')}
            error={emailError}
          />

          <PasswordInput
            register={register('password')}
            error={passwordError}
          />

          <Button
            label='Regístrate'
            type='submit'
            style='secondary'
            override='w-full'
          />

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
