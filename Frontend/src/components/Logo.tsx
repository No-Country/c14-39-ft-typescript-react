import { BUSINESS } from '../data/consts'

export const Logo = () => {
  return <pattern className='w-40 text-2xl leading-none text-black font-display'>{BUSINESS.name}</pattern>
}
