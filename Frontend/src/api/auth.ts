import { UserData, UserLoginData } from '../types/types';
import axios from './axios';

export const registerRequest = (user: UserData) => axios.post('/register', user)

export const loginRequest = (user: UserLoginData) => axios.post('/login', user)

export const logoutRequest = () => axios.post('/logout')

export const verifyTokenRequest = () => {
    return axios.get('/verify');
};