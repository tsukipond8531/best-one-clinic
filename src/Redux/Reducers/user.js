import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../Config/api'



export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (_, thunkApi) => {
        try {
            let _id = localStorage.getItem('_id')
            let user = await Api.get(`/users/${_id}`);
            console.log(user);
            return user.data;
        } catch (error) {
            const errMsg =
            error?.response?.data?.message || error?.response?.data?.error;
            console.log(errMsg);
            return thunkApi.rejectWithValue(errMsg);
        }
    }
);

export const Userlogout = createAsyncThunk(
    "user/logout",
    async (_, thunkApi) => {
        try {
            let user = await Api.post("/auth/logout");
            localStorage.clear()
            return user.data;
        } catch (error) {
            const errMsg =
                error?.response?.data?.message || error?.response?.data?.error;
            console.log(errMsg);
            return thunkApi.rejectWithValue(errMsg);
        }
    }
);

export const user = createSlice({
    name: "user",
    initialState: {
        data: {},
        isLogin: false,
    },
    reducers: {
        login: (state) => {
        state.isLogin = true;
        },
        logOut: (state) => {
        state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLogin = true;
        });
        // // Handle Logout
        builder.addCase(Userlogout.fulfilled, (state) => {
        state.isLogin = false;
        });
    },
});

// Action creators are generated for each case reducer function
export const { login, logOut } = user.actions;

export default user.reducer;
