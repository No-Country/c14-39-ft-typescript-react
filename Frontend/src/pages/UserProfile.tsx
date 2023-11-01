import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { UserData } from '../types/types';
import { Button } from 'flowbite-react';
import { ChangePasswordComponent, EditProfileComponent, MatchHistoryComponent } from '../components/userProfile';


export const UserProfile = () => {

    const { user } = useContext(AuthContext);

    const [activeComponent, setActiveComponent] = useState('');

    const handleEditProfile = () => {
        activeComponent === 'editProfile' ? setActiveComponent('') : setActiveComponent('editProfile');
    };

    // const handleChangePassword = () => {
    //     activeComponent === 'changePassword' ? setActiveComponent('') : setActiveComponent('changePassword');
    // };

    const handleMatchHistory = () => {
        activeComponent === 'matchHistory' ? setActiveComponent('') : setActiveComponent('matchHistory');
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'editProfile':
                return <EditProfileComponent />;
            // case 'changePassword':
            //     return <ChangePasswordComponent />;
            case 'matchHistory':
                return <MatchHistoryComponent />;
            default:
                return null; // O un componente de bienvenida por defecto
        }
    };

    return (
        <>
            <div className='text-center mb-6'>Bienvenido {user?.name}</div>
            <div className='flex justify-center'>
                    <div className='flex justify-center gap-4'>
                        <p>Editar Perfil</p>
                        <Button onClick={handleEditProfile} />
                        {/* <p>Cambiar contraseña</p>
                        <Button onClick={handleChangePassword} /> */}
                        <p>Historial de Partidos</p>
                        <Button onClick={handleMatchHistory} />
                    </div>
            </div>
            <div>
                {renderComponent()}
            </div>
        </>
    )
}
