import { configureStore } from "@reduxjs/toolkit";
import { thoughtReducer } from "./features/thoughts/thoughtsSlice";
import { imageReducer } from "./features/images/imagesSlice";
import { quotesReducer } from "./features/quotes/quotesSlice";

export default configureStore({
  reducer: {
    thoughts: thoughtReducer,
    images: imageReducer,
    quotes: quotesReducer,
  },
});
