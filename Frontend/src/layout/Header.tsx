import { NavBar } from '../components/topbar/Navbar'

export const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-10 flex items-center justify-center'>
      <div className='absolute inset-0 bg-base-green1-60 backdrop-blur-md -z-10 appear-scroll'></div>
      <NavBar />
    </div>
  )
}
