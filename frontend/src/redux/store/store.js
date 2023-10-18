import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/userReducer";

const store = configureStore ({
    reducer:{
        profile: userReducer,
    }
})

export default store;