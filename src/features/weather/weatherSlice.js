import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "34e8a1b3206b4c688c805304251207";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Mexico_city`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = state.error = action.error.message;
      });
  },
});

export const selectWeather = (state) => {
  return state.weather;
};

export const wheaterReducer = weatherSlice.reducer;
