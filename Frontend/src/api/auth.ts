import { UserData, UserLoginData } from '../types/types';
import axios from './axios';

export const registerRequest = (user: UserData) => axios.post('/register', user)

export const loginRequest = (user: UserLoginData) => axios.post('/login', user)


export const verifyTokenRequest = (token: string) => {
    return axios.get('/verify', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};