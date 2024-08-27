import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utills/baseUrl";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

const initialState = {
  deliveryVehicles: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addDelVehDetails = createAsyncThunk(
  "deliveryVehicles/addDelVehDetails",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `${base_url}/api/v1/deliveryVehicle/add-deliveryVehicle-Details`,
        data
      );

      return response?.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
/* 
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
 */
const delVehicleDetailsSlice = createSlice({
  name: "deliveryVehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDelVehDetails.pending, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(addDelVehDetails.fulfilled, (state, action) => {
        state.deliveryVehicles = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = "";
      })
      .addCase(addDelVehDetails.rejected, (state, action) => {
        state.deliveryVehicles = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = "";
      });

    /*.addCase(getDriversDetails.pending, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(getDriversDetails.fulfilled, (state, action) => {
        console.log(action.payload);
        state.driversDetails = action.payload?.driversDetails;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = "";
      })
      .addCase(getDriversDetails.rejected, (state, action) => {
        state.vehicleDetails = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = "";
      }); */
  },
});

export default delVehicleDetailsSlice.reducer;
