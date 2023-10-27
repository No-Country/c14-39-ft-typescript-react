import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AuthContext } from '../context/AuthContext';
import { ROUTES } from '../data/consts';
import { Button } from './Button';

const LogoutButton: React.FC = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleLogout = () => {
    MySwal.fire({
      title: 'Seguro que quieres salir?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire('Cerraste Sesión!');
        logout();
        navigate(ROUTES.HOME);
      }
    });
  };

  return (
    <Button
      label='Salir'
      style='primary'
      onClick={handleLogout}
    />
  );
}

export default LogoutButton;
