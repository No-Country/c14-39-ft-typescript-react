import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/appcontext'
import { AppRoutes } from './routes/AppRoutes'
import Layout from './layout/Layout'
import { AuthProvider } from './context/AuthContext'
import ScrollToTop from './routes/ScrollToTop'

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </AppProvider>
    </AuthProvider>
  )
}

export default App
