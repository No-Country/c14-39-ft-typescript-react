import { UserData } from '../types/types';
import axios from './axios';

export const modifyUserById = async (user: UserData) => axios.put(`/users/${user.id}`, user)

export const deleteUserById = async (user: UserData) => axios.delete(`/users/${user.id}`)


