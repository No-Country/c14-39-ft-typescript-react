import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/appcontext'
import { AppRoutes } from './routes/AppRoutes'
import Layout from './layout/Layout'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
