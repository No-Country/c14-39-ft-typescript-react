import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()
  const scrollTop = () => {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    scrollTop()

    window.addEventListener('haschange', () => scrollTop())
    return window.removeEventListener('haschange', () => scrollTop())
  }, [location.pathname])

  return null
}

export default ScrollToTop
