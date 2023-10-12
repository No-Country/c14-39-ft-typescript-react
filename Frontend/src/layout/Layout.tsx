import Footer from './Footer'
import { Header } from './Header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <main className='bg-base-green1 min-h-screen'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
