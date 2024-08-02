import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CartValue: 0,
    FavValue: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementCart: (state) => {
        state.CartValue += 1;
        },
        decrementCart: (state) => {
        state.CartValue -= 1;
        },
        
        incrementFav: (state) => {
        state.FavValue += 1;
        },
        decrementFav: (state) => {
        state.FavValue -= 1;
        },
        
    },
});

// Action creators are generated for each case reducer function
export const { decrementCart , incrementCart , decrementFav , incrementFav } = counterSlice.actions;

export default counterSlice.reducer;
