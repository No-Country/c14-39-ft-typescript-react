import { Navigate, useRoutes } from "react-router-dom"
import { ROUTES } from "../data/consts"
import Home from "../pages/Home"
import Login from "../pages/Login"
// import Cancha from '../pages/Cancha'
// import Confirm from '../pages/Confirm'
// import Canchas from '../pages/Canchas'
import Registro from "../pages/Registro"
import NotFound from "../pages/NotFound"
import ProtectedRoutes from "./ProtectedRoutes"
import Beneficios from "../pages/Beneficios"
// import UserProfile from '../pages/UserProfile'
import Nosotros from "../pages/Nosotros"
import Torneos from "../pages/Torneos"

import { Suspense, lazy } from "react"
import { RouteSkeleton } from "../components/bookingSection/Skeletons"

const Canchas = lazy(() => import("../pages/Canchas"))
const Cancha = lazy(() => import("../pages/Cancha"))
const Confirm = lazy(() => import("../pages/Confirm"))
const UserProfile = lazy(() => import("../pages/UserProfile"))

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: ROUTES.HOME, element: <Home /> },
    { path: ROUTES.LOGIN, element: <Login /> },
    { path: ROUTES.SIGN_UP, element: <Registro /> },
    { path: ROUTES.BENEFITS, element: <Beneficios /> },
    { path: ROUTES.US, element: <Nosotros /> },
    { path: ROUTES.TOURNAMENTS, element: <Torneos /> },

    {
      path: "/",
      element: <ProtectedRoutes />,
      children: [
        {
          path: ROUTES.FIELDS,
          element: (
            <Suspense fallback={<RouteSkeleton />}>
              <Canchas />
            </Suspense>
          ),
        },
        {
          path: ROUTES.FIELDS_DETAIL,
          element: (
            <Suspense fallback={<RouteSkeleton />}>
              <Cancha />
            </Suspense>
          ),
        },
        {
          path: ROUTES.CONFIRM,
          element: (
            <Suspense fallback={<RouteSkeleton />}>
              <Confirm />
            </Suspense>
          ),
        },
        {
          path: ROUTES.USER,
          element: (
            <Suspense fallback={<RouteSkeleton />}>
              <UserProfile />
            </Suspense>
          ),
        },
      ],
    },

    { path: ROUTES.ADMIN, element: <Navigate to='/login' /> },
    { path: ROUTES.ANY, element: <NotFound /> },
  ])

  return routes
}
