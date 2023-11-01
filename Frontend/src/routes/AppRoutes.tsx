import { Navigate, useRoutes } from 'react-router-dom'
import { ROUTES } from '../data/consts'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Cancha from '../pages/Cancha'
import Confirm from '../pages/Confirm'
import Canchas from '../pages/Canchas'
import Registro from '../pages/Registro'
import NotFound from '../pages/NotFound'
import ProtectedRoutes from './ProtectedRoutes'
import Beneficios from '../pages/Beneficios'
import { UserProfile } from '../pages/UserProfile'
import Nosotros from '../pages/Nosotros'
import Torneos from '../pages/Torneos'

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: ROUTES.HOME, element: <Home /> },
    { path: ROUTES.LOGIN, element: <Login /> },
    { path: ROUTES.SIGN_UP, element: <Registro /> },
    { path: ROUTES.BENEFITS, element: <Beneficios /> },
    { path: ROUTES.US, element: <Nosotros /> },
    { path: ROUTES.TOURNAMENTS, element: <Torneos /> },

    {
      path: '/',
      element: <ProtectedRoutes />,
      children: [
        { path: ROUTES.FIELDS, element: <Canchas /> },
        { path: ROUTES.FIELDS_DETAIL, element: <Cancha /> },
        { path: ROUTES.CONFIRM, element: <Confirm /> },
        { path: ROUTES.USER, element: <UserProfile/>}
      ],
    },

    { path: ROUTES.ADMIN, element: <Navigate to='/login' /> },
    { path: ROUTES.ANY, element: <NotFound /> },
  ])

  return routes
}
