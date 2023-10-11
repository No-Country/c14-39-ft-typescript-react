import { Header } from './Header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <main className='bg-base-green1 min-h-screen pt-24'>{children}</main>
    </>
  )
}

export default Layout
