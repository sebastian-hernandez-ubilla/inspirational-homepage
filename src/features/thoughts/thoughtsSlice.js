import { createSlice } from "@reduxjs/toolkit";

const thoughtsSlice = createSlice({
  name: "thoughts",
  initialState: [],
  reducers: {
    addThought: (state, action) => {
      //action.payload object: i.e {id: '605eddae-b252-4f4b-ae6b-84cedc69987c', description: 'Hello', isDone: false}
      state.push(action.payload);
    },
    removeThought: (state, action) => {
      //actioon.payload is the id: i.e '605eddae-b252-4f4b-ae6b-84cedc69987c'
      return state.filter((thought) => thought.id !== action.payload);
    },
    completeThought: (state, action) => {
        const thought = state.find(item => item.id === action.payload.id);
        thought.isDone=!thought.isDone;
    },
  },
});

export const selectThoughts = (state) => state.thoughts;

export const { addThought, removeThought, completeThought } =
  thoughtsSlice.actions;
export const thoughtReducer = thoughtsSlice.reducer;
