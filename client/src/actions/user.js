import axios from 'axios';
import { setUser } from '../store/loginReducer';

export const registration = async (username, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/auth/registration`, {
            username,
            password
        })
        console.log(response.data.message);
    } catch (e) {
        console.log(e);
    }
}

export const login = (username, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/auth/login`, {
                username,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/auth/auth`, {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.user.username)
        } catch (e) {
            console.log(e);
            localStorage.removeItem('token')
        }
    }
}