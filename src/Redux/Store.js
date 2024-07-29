import { configureStore } from "@reduxjs/toolkit";
import user from "./Reducers/user";

export const store = configureStore({
    reducer: {
        user ,
    },
});
