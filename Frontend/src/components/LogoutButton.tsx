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

      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'custom-primary',
        cancelButton: 'custom-secondary',
        popup: 'custom-popup',
      },
    }).then(result => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: 'Cerraste Sesión!',
          customClass: {
            confirmButton: 'custom-primary',
            popup: 'custom-popup',
          },
        })
        localStorage.removeItem('userInitials');
        localStorage.removeItem('userProfile');
        logout()
        navigate(ROUTES.HOME)
      }
    })
  }

  return (
    <Button
      label='Salir'
      style='primary'
      onClick={handleLogout}
    />

  )
}

export default LogoutButton
