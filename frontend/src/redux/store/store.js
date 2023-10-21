import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "../reducer/userReducer";

const store = configureStore ({
    reducer:{
        profile: userReducer,
    },
    middleware: [thunk],
})

export default store;