import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from '../data/consts'
import { AppContext } from '../context/appcontext'

import { Button } from './Button'
import { Logo } from './Logo'
import { NavbarItem } from './NavbarItem'
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline'

export const NavBar = () => {
  const navigate = useNavigate()
  const { isLogged } = useContext(AppContext)

  const { pathname } = useLocation()

  const thisIsHome = pathname !== ROUTES.HOME

  return (
    <div className={`w-full max-w-6xl flex items-center px-4 md:px-7 h-20  ${thisIsHome ? 'justify-between' : 'justify-end'}`}>
      {thisIsHome && <Logo />}

      <div className='items-center hidden gap-3 md:flex'>
        <ul className='flex gap-6 px-4 py-0'>
          <NavbarItem label='Reserva' />
          <NavbarItem label='Nosotros' />
          <NavbarItem label='Beneficios' />
          <NavbarItem label='Patrocinadores' />
        </ul>
        {!isLogged && (
          <Button
            label='Ingresa'
            style='primary'
            onClick={() => navigate(ROUTES.LOGIN)}
          />
        )}
        {/* <Button
  label='Regístrate'
  style='secondary'
  onClick={() => navigate(ROUTES.SIGN_UP)}
/> */}
        {isLogged && (
          <Button
            label='Perfil'
            style='primary'
            onClick={() => navigate(ROUTES.ADMIN)}
            icon={<UserCircleIcon className='w-6 h-6 text-current' />}
          />
        )}
      </div>
      <button className='md:hidden'>
        <Bars3Icon className='w-6 h-6 text-black' />
      </button>
    </div>
  )
}
