import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../Config/api'



export const fetchAllFav = createAsyncThunk(
    "user/fetchAllFav",
    async (_, thunkApi) => {
        try {
            let fav = await Api.get(`/wishlist`);
            // console.log(fav);
            return fav.data;
        } catch (error) {
            const errMsg =
            error?.response?.data?.message || error?.response?.data?.error;
            // console.log(errMsg);
            return thunkApi.rejectWithValue(errMsg);
        }
    }
);

export const Favorite  = createSlice({
    name: "favorite",
    initialState: {
        AllData: [],
        isLogin: false,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllFav.fulfilled, (state, action) => {
            state.AllData = action.payload;
        });
        
    },
});

// Action creators are generated for each case reducer function
// export const {} = user.actions;

export default Favorite.reducer;
