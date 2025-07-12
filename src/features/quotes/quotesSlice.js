import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuote = createAsyncThunk("quotes/fetchQuote", async () => {
  const response = await axios.get(
    "https://api.quotable.io/quotes/random?maxLength=150"
  );
  return response.data;
});

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quote: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = state.error = action.error.message;
      });
  },
});

export const selectQuote = state => state.quotes;

export const quotesReducer = quotesSlice.reducer;
