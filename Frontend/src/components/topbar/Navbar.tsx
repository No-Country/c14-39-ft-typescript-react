import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../data/consts'
import { Button } from '../Button'
import { Logo } from './Logo'
import { NavbarItem } from './NavbarItem'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { AuthContext } from '../../context/AuthContext'
import LogoutButton from '../LogoutButton'

export const NavBar = () => {
  const navigate = useNavigate()
  const { isLogged } = useContext(AuthContext)

  const { pathname } = useLocation()

  const thisIsHome = pathname !== ROUTES.HOME

  return (
    <div className={`w-full max-w-6xl flex items-center px-4 md:px-7 h-20 justify-between`}>
      <Logo inHome={thisIsHome} />

      <div className='items-center hidden gap-3 p-2 rounded-full md:flex bg-base-green1'>
        <ul className='flex gap-6 px-4 py-0'>
          <NavbarItem
            label='Reserva'
            to={ROUTES.HOME}
          />
          {/* <NavbarItem
            label='Nosotros'
            to={'/'}
          /> */}
          <NavbarItem
            label='Beneficios'
            to={ROUTES.BENEFITS}
          />
          {/* <NavbarItem
            label='Patrocinadores'
            to={'/'}
          /> */}
        </ul>
        {!isLogged ? (
          <Button
            label='Ingresa'
            style='primary'
            onClick={() => navigate(ROUTES.LOGIN)}
          />
        ) : (
          <LogoutButton />
        )}
      </div>
      <button className='md:hidden'>
        <Bars3Icon className='w-6 h-6 text-black' />
      </button>
    </div>
  )
}
