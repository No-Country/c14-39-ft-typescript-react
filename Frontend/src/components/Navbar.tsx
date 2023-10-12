import { Button } from './Button'
import { Logo } from './Logo'
import { NavbarItem } from './NavbarItem'

type NavBarProps = {
  hasLogo: boolean
}

export const NavBar = ({ hasLogo }: NavBarProps) => {
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
        />
        <Button
          label='Regístrate'
          style='secondary'
        />
      </div>
    </div>
  )
}
