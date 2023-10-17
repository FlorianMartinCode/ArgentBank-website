import { configureStore } from "@reduxjs/toolkit";
// import loginReduccer from '../reducer/login';

const store = configureStore ({
    reducer:{
        // login: loginReduccer
    }
})

export default store;