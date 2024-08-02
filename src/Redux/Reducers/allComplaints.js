import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from '../../Config/api'



export const fetchAllComplaints = createAsyncThunk(
    "user/fetchAllComplaints",
    async (_, thunkApi) => {
        try {
            let complaints = await Api.get(`/complaints`);
            console.log(complaints);
            return complaints.data;
        } catch (error) {
            const errMsg =
            error?.response?.data?.message || error?.response?.data?.error;
            console.log(errMsg);
            return thunkApi.rejectWithValue(errMsg);
        }
    }
);

export const allComplaints = createSlice({
    name: "complaints",
    initialState: {
        AllData: [],
        isLogin: false,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllComplaints.fulfilled, (state, action) => {
            state.AllData = action.payload;
        });
        
    },
});

// Action creators are generated for each case reducer function
// export const {} = user.actions;

export default allComplaints.reducer;
