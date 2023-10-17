import { Button } from './Button'
import { Logo } from './Logo'
import { NavbarItem } from './NavbarItem'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../data/consts'

type NavBarProps = {
  hasLogo: boolean
}

export const NavBar = ({ hasLogo }: NavBarProps) => {
  const navigate = useNavigate()
  return (
    <div className={`w-full max-w-6xl flex items-center px-7 h-20  ${hasLogo ? 'justify-between' : 'justify-end'}`}>
      {hasLogo && <Logo />}

      <div className='flex items-center gap-3'>
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
    </div>
  )
}
