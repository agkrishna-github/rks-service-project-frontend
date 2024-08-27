import { configureStore } from "@reduxjs/toolkit";
import vehicleDetailsSlice from "../features/vehicleDetailsSlice";
import driversDetailsSlice from "../features/driversDetailsSlice";
import imageUploadSlice from "../features/imageUploadSlice";
import deliveryVehicleSlice from "../features/deliveryVehicleSlice";

export const store = configureStore({
  reducer: {
    vehicle: vehicleDetailsSlice,
    driver: driversDetailsSlice,
    image: imageUploadSlice,
    deliveryVehicle: deliveryVehicleSlice,
  },
});
