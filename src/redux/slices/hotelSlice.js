import { createSlice } from "@reduxjs/toolkit";
import {
  fetchHotels,
  fetchHotelById,
} from "../actions/hotels";

const initialState = {
  hotels: {
    items: [],
    status: "loading",
  },
  currentHotel: {
    status: "loading",
    data: {},
  },
};

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchHotels.pending]: (state) => {
      state.hotels.status = "loading";
      state.hotels.items = [];
    },
    [fetchHotels.fulfilled]: (state, action) => {
      state.hotels.status = "loaded";
      state.hotels.items = action.payload;
    },
    [fetchHotels.rejected]: (state) => {
      state.hotels.status = "error";
      state.hotels.items = [];
    },
    [fetchHotelById.pending]: (state) => {
      state.currentHotel.status = "loading";
      state.currentHotel.data = {};
    },
    [fetchHotelById.fulfilled]: (state, action) => {
      state.currentHotel.status = "loaded";
      state.currentHotel.data = action.payload;
    },
    [fetchHotelById.rejected]: (state) => {
      state.currentHotel.status = "error";
      state.currentHotel.data = {};
    }
  },
});

export default hotelsSlice.reducer;
