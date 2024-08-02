import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Config/api";

export const fetchOfferDetails = createAsyncThunk(
    "user/fetchOfferDetails",
    async (_, thunkApi) => {
        try {
        let user = await Api.get(`/offers`);
        console.log(user);
        console.log("hhhh");
        return user.data;
        } catch (error) {
        const errMsg =
            error?.response?.data?.message || error?.response?.data?.error;
        console.log(errMsg);
        return thunkApi.rejectWithValue(errMsg);
        }
    }
);

export const Offers = createSlice({
    name: "offers",
    initialState: {
        data: [],
        isLogin: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOfferDetails.fulfilled, (state, action) => {
            state.data = action.payload;
        });
    },
});

// Action creators are generated for each case reducer function
// export const { login, logOut } = Offers.actions;

export default Offers.reducer;
