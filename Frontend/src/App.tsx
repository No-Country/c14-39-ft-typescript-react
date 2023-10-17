import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import { AppProvider } from './context/appcontext'
import Layout from './layout/Layout'

import { ROUTES } from './data/consts'

import Home from './pages/Home'
import Login from './pages/Login'
import Cancha from './pages/Cancha'
import Confirm from './pages/Confirm'
import Canchas from './pages/Canchas'
import Registro from './pages/Registro'

// /admin
// /admin/:cancha

const AppRoutes = () => {
  const routes = useRoutes([
    { path: ROUTES.HOME, element: <Home /> },
    { path: ROUTES.LOGIN, element: <Login /> },
    { path: ROUTES.SIGN_UP, element: <Registro /> },

    { path: ROUTES.FIELDS, element: <Canchas /> },
    { path: ROUTES.FIELDS_DETAIL, element: <Cancha /> },
    { path: ROUTES.CONFIRM, element: <Confirm /> },

    { path: ROUTES.ADMIN, element: <Navigate to='/login' /> },
    { path: ROUTES.ANY, element: <Navigate to='/' /> },
  ])

  return routes
}

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
