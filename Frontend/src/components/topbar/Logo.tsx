import { BUSINESS } from '../../data/consts'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
  return (
    <NavLink
      to='/'
      className='w-40 text-xl leading-[0.8] md:leading-[0.8] text-black md:text-2xl font-display appear-scroll'>
      {BUSINESS.name}
    </NavLink>
  )
}
