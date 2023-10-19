import { Button } from './Button'
import { Logo } from './Logo'
import { NavbarItem } from './NavbarItem'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../data/consts'
import { Bars3Icon } from '@heroicons/react/24/outline'

type NavBarProps = {
  hasLogo: boolean
}

export const NavBar = ({ hasLogo }: NavBarProps) => {
  const navigate = useNavigate()
  return (
    <div className={`w-full max-w-6xl flex items-center px-4 md:px-7 h-20  ${hasLogo ? 'justify-between' : 'justify-end'}`}>
      {hasLogo && <Logo />}

      <div className='items-center hidden gap-3 md:flex'>
        <ul className='flex gap-6 px-4 py-0'>
          <NavbarItem label='Reserva' />
          <NavbarItem label='Nosotros' />
          <NavbarItem label='Beneficios' />
          <NavbarItem label='Patrocinadores' />
        </ul>

        <Button
          label='Ingresa'
          style='primary'
          onClick={() => navigate(ROUTES.LOGIN)}
        />
        <Button
          label='Regístrate'
          style='secondary'
          onClick={() => navigate(ROUTES.SIGN_UP)}
        />
      </div>
      <button className='md:hidden'>
        <Bars3Icon className='w-6 h-6 text-black' />
      </button>
    </div>
  )
}
