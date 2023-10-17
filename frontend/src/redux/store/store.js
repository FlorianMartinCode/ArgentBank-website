import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileUser";

const store = configureStore ({
    reducer:{
        profile: profileReducer,
    }
})

export default store;