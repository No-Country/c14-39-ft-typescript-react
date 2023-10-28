import { NavLink, To } from 'react-router-dom'

export const NavbarItem = ({ label, to }: { label: string; to: To }) => {
  return (
    <li className='font-body w-fit mt-[-1.00px] text-black text-center'>
      <NavLink to={to}>{label}</NavLink>
    </li>
  )
}
