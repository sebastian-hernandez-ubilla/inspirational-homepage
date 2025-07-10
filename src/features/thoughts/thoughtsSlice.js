import { createSlice } from "@reduxjs/toolkit";

const thoughtsSlice = createSlice({
  name: "thoughts",
  initialState: [],
  reducers: {
    addThought: (state, action) => {
        //action.payload is the input of the form: i.e 'water plants'
      state.push({ description: action.payload, isDone: false });
    },
  },
});

export const selectThoughts = (state) => state.thoughts;

export const { addThought } = thoughtsSlice.actions;
export const thoughtReducer = thoughtsSlice.reducer;
