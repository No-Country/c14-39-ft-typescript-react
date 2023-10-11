import { NavBar } from '../components/Navbar'

export const Header = () => {
  return (
    <div className='flex w-full items-center justify-center fixed top-0 left-0 right-0 bg-base-green1'>
      <NavBar hasLogo={false} />
    </div>
  )
}
