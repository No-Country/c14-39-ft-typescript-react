type LayoutProps = {
  children: React.ReactNode
}

const LayoutWrapper = ({ children }: LayoutProps) => {
  return <div className='w-full max-w-6xl mx-auto my-0 px-7'>{children}</div>
}

export default LayoutWrapper
