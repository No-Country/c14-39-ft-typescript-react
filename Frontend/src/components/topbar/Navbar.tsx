import { useContext, useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../data/consts'
import { Button } from '../Button'
import { Logo } from './Logo'
import { NavbarItem } from './NavbarItem'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { AuthContext } from '../../context/AuthContext'
import LogoutButton from '../LogoutButton'
import { Avatar } from 'flowbite-react';
import { UserData } from '../../types/types'

const mdBreakPoint = 768

export const NavBar = () => {
  const navigate = useNavigate()

  const { isLogged, user } = useContext(AuthContext)

  const [initials, setInitials] = useState<string>()

  useEffect(() => {
    if (user) {
      const { name, lastname } = user as UserData
      const firstInitial = name.charAt(0)
      const lastInitial = lastname.charAt(0)
      setInitials(`${firstInitial}${lastInitial}`)
    }
  }, [user])

  const { pathname } = useLocation()

  const thisIsHome = pathname !== ROUTES.HOME && pathname !== '/'


  useEffect(() => {
    const menu = document.querySelector('#nav-menu')
    const thisWidth = window.innerWidth

    if (thisWidth < mdBreakPoint) {
      menu?.classList.add('hidden')
    }
    return () => {}
  }, [pathname])

  function toggleMenu() {
    const menu = document.querySelector('#nav-menu')
    menu?.classList.toggle('hidden')
  }

  return (
    <div className={`w-full max-w-6xl flex items-center px-4 md:px-7 h-20 justify-between`}>
      <Logo inHome={thisIsHome} />

      <div
        id='nav-menu'
        className='fixed inset-0 flex-col items-center hidden gap-3 p-2 mt-20 md:inset-auto md:static md:rounded-full md:mt-0 md:flex-row bg-base-green1 md:flex animate-fade-in'>
        <ul className='flex flex-col gap-6 px-4 py-0 mb-6 md:mb-0 md:flex-row'>
          <NavbarItem
            label='Reserva'
            to={ROUTES.HOME}
          />
          <NavbarItem
            label='Nosotros'
            to={ROUTES.US}
          />
          <NavbarItem
            label='Beneficios'
            to={ROUTES.BENEFITS}
          />
          <NavbarItem
            label='Pronto: Torneos'
            to={ROUTES.TOURNAMENTS}
          />
        </ul>
        <div className='flex justify-center md:block'>
          {!isLogged ? (
            <Button
              label='Ingresa'
              style='primary'
              onClick={() => navigate(ROUTES.LOGIN)}
            />
          ) : (
            <>
              {initials && (
                <div className="flex flex-wrap gap-2">
                  <Avatar placeholderInitials={initials} onClick={() => navigate(ROUTES.USER)} />
                </div>
              )}
              <LogoutButton />
            </>
          )}
        </div>
      </div>
      <button
        className='flex items-center justify-center w-12 h-12 rounded-full md:hidden bg-base-green1'
        onClick={() => toggleMenu()}>
        <Bars3Icon className='w-6 h-6 text-black' />
      </button>
    </div>
  )
}
