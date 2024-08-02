import { configureStore } from "@reduxjs/toolkit";
import user from "./Reducers/user";
import counter from "./Reducers/counter";
import allComplaints from "./Reducers/allComplaints";
import Offers from "./Reducers/Offers";

export const store = configureStore({
    reducer: {
        user ,
        counter,
        allComplaints,
        Offers
    },
});
