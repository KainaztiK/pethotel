import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import hotelsSlice from "./slices/hotelSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice,
    auth: authSlice,
  },
});
