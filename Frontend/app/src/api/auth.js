import { jwtDecode } from 'jwt-decode';

const setToken = token => localStorage.setItem('token', token);
const deleteToken = () => localStorage.removeItem('token');
const getToken = () => localStorage.getItem('token');
const getUser = () => {
    const token = getToken()
    return token && jwtDecode(token)
}

const authApi = { setToken, deleteToken, getToken, getUser };
export default authApi;