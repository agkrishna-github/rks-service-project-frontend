import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utills/baseUrl";

export const uploadImg = createAsyncThunk(
  "images/uploadImg",
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }
      const response = await axios.post(
        `${base_url}/api/v1/uploadImg`,
        formData
      );
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
/* 
export const deleteImgFromDropZone = createAsyncThunk(
  "images/deleteImgFromDropZone",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${base_url}uploadImg/deleteImage/${id}`
      );

      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
); */

const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const ImagUploadSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImg.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImg.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = action.payload;
      })
      .addCase(uploadImg.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
    /* .addCase(deleteImgFromDropZone.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteImgFromDropZone.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = state.images.filter(
          (image) => image?.public_id !== action?.payload?.imgId
        );
      })
      .addCase(deleteImgFromDropZone.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      }); */
  },
});
export default ImagUploadSlice.reducer;
