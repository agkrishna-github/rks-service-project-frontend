import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utills/baseUrl";

const initialState = {
  vehicleDetails: [],
  newVehicleDetails: null,
  singleVehicleDetails: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addVehicleDetails = createAsyncThunk(
  "vehicleDetails/addVehicleDetails",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `${base_url}/api/v1/vehicle/add-Vehicle-Details/`,
        data
      );

      return response?.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getVehiclesDetails = createAsyncThunk(
  "vehicleDetails/getVehiclesDetails",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `${base_url}/api/v1/vehicle/get-Vehicle-Details`
      );
      console.log(response);
      return response?.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSingleVehiclesDetails = createAsyncThunk(
  "vehicleDetails/getSingleVehiclesDetails",
  async (vid, thunkAPI) => {
    try {
      const response = await axios.get(
        `${base_url}/api/v1/vehicle/get-singleVehicle-Details/${vid}`
      );
      console.log(response);
      return response?.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const vehicleDetailsSlice = createSlice({
  name: "vehicleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addVehicleDetails.pending, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(addVehicleDetails.fulfilled, (state, action) => {
        state.newVehicleDetails = action.payload;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = "";
      })
      .addCase(addVehicleDetails.rejected, (state, action) => {
        state.newVehicleDetails = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = "";
      })
      .addCase(getVehiclesDetails.pending, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(getVehiclesDetails.fulfilled, (state, action) => {
        console.log(action.payload);
        state.vehicleDetails = action.payload?.vehiclesDetails;
        state.isError = false;
        state.isSuccess = true;
        state.isLoading = false;
        state.message = "";
      })
      .addCase(getVehiclesDetails.rejected, (state, action) => {
        state.vehicleDetails = [];
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;
        state.message = "";
      })
      .addCase(getSingleVehiclesDetails.pending, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(getSingleVehiclesDetails.fulfilled, (state, action) => {
        console.log(action.payload);
        state.singleVehicleDetails = action.payload?.singleVehiclesDetails;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
      })
      .addCase(getSingleVehiclesDetails.rejected, (state, action) => {
        state.singleVehicleDetails = null;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "";
      });
  },
});

export default vehicleDetailsSlice.reducer;
