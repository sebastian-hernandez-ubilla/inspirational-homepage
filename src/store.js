import { configureStore } from "@reduxjs/toolkit";
import { thoughtReducer } from "./features/thoughts/thoughtsSlice";
import { imageReducer } from "./features/images/imagesSlice";
import { quotesReducer } from "./features/quotes/quotesSlice";
import { wheaterReducer } from "./features/weather/weatherSlice";

export default configureStore({
  reducer: {
    thoughts: thoughtReducer,
    images: imageReducer,
    quotes: quotesReducer,
    weather: wheaterReducer,
  },
});
