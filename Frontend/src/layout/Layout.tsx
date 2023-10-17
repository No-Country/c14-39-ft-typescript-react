import Footer from './Footer'
import { Header } from './Header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='z-0 min-h-screen pt-24'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
