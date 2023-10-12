import { NavBar } from '../components/Navbar'

export const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 flex items-center justify-center w-full bg-base-green1'>
      <NavBar hasLogo={true} />
    </div>
  )
}
