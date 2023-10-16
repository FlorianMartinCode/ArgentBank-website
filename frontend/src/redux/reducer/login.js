const initialState = {
    user: null,
    error: null,
    isLoggedIn: false
}

const loginReduccer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', action.payload);
            return {
                user:action.payload,
                error:null,
                isLoggedIn: true
            };
        case "LOGIN_FAILURE":
            return {
                user:null,
                error:action.payload,
                isLoggedIn: false
            };
        case "LOGOUT":
            localStorage.removeItem('token');
            return {
                user:null,
                error:null,
                isLoggedIn: false
            }
        default:
            return state

    }
}

export default loginReduccer