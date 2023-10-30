import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { UserData } from '../types/types';
import { Button } from 'flowbite-react';
import { ChangePasswordComponent, EditProfileComponent, MatchHistoryComponent } from '../components/userProfile';


export const UserProfile = () => {

    const { user } = useContext(AuthContext);

    const [userProfile, setUserProfile] = useState<UserData | null>(null);
    const [activeComponent, setActiveComponent] = useState('');

    const handleEditProfile = () => {
        setActiveComponent('editProfile');
    };

    const handleChangePassword = () => {
        setActiveComponent('changePassword');
    };

    const handleMatchHistory = () => {
        setActiveComponent('matchHistory');
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'editProfile':
                return <EditProfileComponent />;
            case 'changePassword':
                return <ChangePasswordComponent />;
            case 'matchHistory':
                return <MatchHistoryComponent />;
            default:
                return null; // O un componente de bienvenida por defecto
        }
    };

    useEffect(() => {
        const savedUserProfile = localStorage.getItem("userProfile");
        if (savedUserProfile) {
            try {
                // Asegurándonos de que es un JSON válido antes de parsearlo.
                const parsedUserProfile = JSON.parse(savedUserProfile);
                if (parsedUserProfile && typeof parsedUserProfile === 'object') {
                    setUserProfile(parsedUserProfile);
                }
            } catch (e) {
                console.error("Error al parsear userProfile:", e);
                // Manejar el error o establecer un estado de error según sea necesario
            }
        } else if (user) {
            const timer = setTimeout(() => {
                setUserProfile(user);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [user]);

    useEffect(() => {
        // Esta segunda función useEffect se activa cuando userProfile cambia.
        if (userProfile) {
            localStorage.setItem("userProfile", JSON.stringify(userProfile));
        }
    }, [userProfile]);



    return (
        <>
            <div className='text-center mb-6'>Bienvenido {userProfile?.name}</div>
            <div className='flex justify-center'>
                {/* Añadiendo la botonera */}
                {userProfile && (
                    <div className='flex justify-center gap-4'>
                        <p>Editar Perfil</p>
                        <Button onClick={handleEditProfile} />
                        <p>Cambiar contraseña</p>
                        <Button onClick={handleChangePassword} />
                        <p>Historial de Partidos</p>
                        <Button onClick={handleMatchHistory} />
                    </div>
                )}
            </div>
            <div>
                {renderComponent()}
            </div>
        </>
    )
}
