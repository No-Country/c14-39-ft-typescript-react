import { Navigate, useRoutes } from 'react-router-dom'
import { ROUTES } from '../data/consts'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Cancha from '../pages/Cancha'
import Confirm from '../pages/Confirm'
import Canchas from '../pages/Canchas'
import Registro from '../pages/Registro'
import NotFound from '../pages/NotFound'

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: ROUTES.HOME, element: <Home /> },
    { path: ROUTES.LOGIN, element: <Login /> },
    { path: ROUTES.SIGN_UP, element: <Registro /> },

    { path: ROUTES.FIELDS, element: <Canchas /> },
    { path: ROUTES.FIELDS_DETAIL, element: <Cancha /> },
    { path: ROUTES.CONFIRM, element: <Confirm /> },

    { path: ROUTES.ADMIN, element: <Navigate to='/login' /> },
    { path: ROUTES.ANY, element: <NotFound /> },
  ])

  return routes
}
