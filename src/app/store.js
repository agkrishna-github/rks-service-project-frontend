import { configureStore } from "@reduxjs/toolkit";
import vehicleDetailsSlice from "../features/vehicleDetailsSlice";
import driversDetailsSlice from "../features/driversDetailsSlice";

export const store = configureStore({
  reducer: {
    vehicle: vehicleDetailsSlice,
    driver: driversDetailsSlice,
  },
});
