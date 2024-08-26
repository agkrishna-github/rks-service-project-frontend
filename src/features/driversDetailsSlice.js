import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utills/baseUrl";

const initialState = {
  driversDetails: [],
  newDriverDetails: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getDriversDetails = createAsyncThunk(
  "driverDetails/getDriversDetails",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `${base_url}/api/v1/driver/get-Drivers-Details`
      );
      console.log(response);
      return response?.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const driverDetailsSlice = createSlice({
  name: "driverDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDriversDetails.pending, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(getDriversDetails.fulfilled, (state, action) => {
        console.log(action.payload);
        state.driversDetails = action.payload?.driversDetails;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(getDriversDetails.rejected, (state, action) => {
        state.vehicleDetails = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = "";
      });
  },
});

export default driverDetailsSlice.reducer;
