const INITIAL_STATE = {
    user:null,
    username:'',
    password:'',
    submitted:false,
    isFetching: false,
    error: null,
    successMsg:null,
    isLoggedIn: false
}
const userReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SUBMIT':
            return {
                ...currentState,
                user:null,
                username: currentState.username,
                password: currentState.password,
                submitted:true,
                isFetching: false,
                error: null,
                successMsg:null,
                isLoggedIn: false
            }
        case 'INPUT_CHANGED':
            const state = {
                ...currentState,
                user:null,
                username: currentState.username,
                password: currentState.password,
                submitted:false,
                isFetching: false,
                error: null,
                successMsg:null,
                isLoggedIn: false
            }
            state[action.name] = action.value;
            return state;
        case 'LOGIN_REQUEST':
            return {
                ...currentState,
                user:null,
                username: action.username,
                password: action.password,
                submitted:true,
                isFetching: true,
                error: null,
                successMsg:null,
                isLoggedIn: false
            }
        case 'LOGIN_REQUEST_SUCCESS':
            return {
                ...currentState,
                user:action.user,
                username: currentState.username,
                password: currentState.password,
                submitted:true,
                isFetching: false,
                error: null,
                successMsg:action.message,
                isLoggedIn: true
            }
        case 'LOGIN_REQUEST_FAILED':
            return {
                ...currentState,
                user:null,
                username: currentState.username,
                password: currentState.password,
                submitted:true,
                isFetching: false,
                error: action.error,
                successMsg:null,
                isLoggedIn: false
            }
        default:
            return currentState;
    }
}

export default userReducer;