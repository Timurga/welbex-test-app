const defaultState = {
    currentUser: {},
    isAuth: false,
    username: ''
}

const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'
const SET_USERNAME = 'SET_USERNAME'

export default function loginReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload.user,
                isAuth: true,
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
            
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const setUserName = (username) => ({type: SET_USERNAME, payload: username})
export const logout = () => ({type: LOGOUT})