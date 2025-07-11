import { configureStore } from "@reduxjs/toolkit";
import { thoughtReducer } from "./features/thoughts/thoughtsSlice";
import { imageReducer } from "./features/images/imagesSlice";

export default configureStore({
  reducer: {
    thoughts: thoughtReducer,
    images:imageReducer,
  },
});
