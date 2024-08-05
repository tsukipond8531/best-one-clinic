import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../Config/api'



export const fetchAllUserFav = createAsyncThunk(
    "user/fetchAllUserFav",
    async (_, thunkApi) => {
        try {
            let complaints = await Api.get(`/wishlist/all`);
            // console.log(complaints);
            return complaints.data;
        } catch (error) {
            const errMsg =
            error?.response?.data?.message || error?.response?.data?.error;
            // console.log(errMsg);
            return thunkApi.rejectWithValue(errMsg);
        }
    }
);

export const fetchUserById = createAsyncThunk(
    "user/fetchUserById",
    async (_, thunkApi) => {
        try {
            let userId = localStorage.getItem('userId')
            let complaints = await Api.get(`/users/${userId}`);
            // console.log(complaints);
            return complaints.data;
        } catch (error) {
            const errMsg =
            error?.response?.data?.message || error?.response?.data?.error;
            // console.log(errMsg);
            return thunkApi.rejectWithValue(errMsg);
        }
    }
);

export const AllUserFav = createSlice({
    name: "AllUserFav",
    initialState: {
        AllData: [],
        userData : [],
        isLogin: false,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllUserFav.fulfilled, (state, action) => {
            state.AllData = action.payload;
        });
        
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.userData = action.payload;
        });
        
    },
});

// Action creators are generated for each case reducer function
// export const {} = user.actions;

export default AllUserFav.reducer;
