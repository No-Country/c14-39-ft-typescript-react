import { BUSINESS } from '../data/consts'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
  return (
    <NavLink
      to='/'
      className='w-40 text-xl leading-none text-black md:text-2xl font-display'>
      {BUSINESS.name}
    </NavLink>
  )
}
