import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";



interface AuthContextType {
  loading: boolean;
  isLogged: boolean;
}

function ProtectedRoutes(): JSX.Element {
  const { loading, isLogged } = useContext(AuthContext) as AuthContextType;

  // if (loading) return <h1>Loading...</h1>;

  if (!loading && !isLogged) {
    return <Navigate to="/ingresa" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
