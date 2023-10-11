import { Button } from './Button'
import { Logo } from './Logo'

type NavBarProps = {
  hasLogo: boolean
}

export const NavBar = ({ hasLogo }: NavBarProps) => {
  return (
    <div className={`w-full max-w-6xl flex items-center px-7 h-20  ${hasLogo ? 'justify-between' : 'justify-end'}`}>
      {hasLogo && <Logo />}

      <div className='flex items-center gap-3'>
        <ul className='flex items-start gap-6 px-4 py-0'>
          <NavbarItem label='Nosotros' />
          <NavbarItem label='Beneficios' />
          <NavbarItem label='Patrocinadores' />
          <NavbarItem label='Reserva' />
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

export const NavbarItem = ({ label }: { label: string }) => {
  return <li className='font-body w-fit mt-[-1.00px] text-black text-center'>{label}</li>
}
