import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/appcontext'
import { AppRoutes } from './routes/AppRoutes'
import Layout from './layout/Layout'
import { AuthProvider } from './context/AuthContext'
import ScrollToTop from './routes/ScrollToTop'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <AuthProvider>
      <UserProvider>
      <AppProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </AppProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App
