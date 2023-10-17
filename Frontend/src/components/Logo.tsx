import { BUSINESS } from '../data/consts'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
  return (
    <NavLink
      to='/'
      className='w-40 text-2xl leading-none text-black font-display'>
      {BUSINESS.name}
    </NavLink>
  )
}
