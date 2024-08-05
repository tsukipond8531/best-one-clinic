import { configureStore } from "@reduxjs/toolkit";
import user from "./Reducers/user";
import counter from "./Reducers/counter";
import allComplaints from "./Reducers/allComplaints";
import Offers from "./Reducers/Offers";
import Favorite from "./Reducers/Favorite";
import Cart from "./Reducers/Cart";
import AllUserFav  from "./Reducers/AllFavorite";

export const store = configureStore({
    reducer: {
        user ,
        counter,
        allComplaints,
        Offers,
        Favorite,
        Cart,
        AllUserFav
    },
});
