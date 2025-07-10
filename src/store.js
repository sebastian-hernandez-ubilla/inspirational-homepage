import { configureStore } from "@reduxjs/toolkit";
import { thoughtReducer } from "./features/thoughts/thoughtsSlice";

export default configureStore({
  reducer: {
    thoughts: thoughtReducer,
  },
});
