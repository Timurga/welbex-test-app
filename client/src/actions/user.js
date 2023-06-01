import axios from 'axios';
import { setUser, setUserName } from '../store/loginReducer';

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
            dispatch(setUserName(response.data.user.username))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            console.log(e);
            localStorage.removeItem('token')
        }
    }
}