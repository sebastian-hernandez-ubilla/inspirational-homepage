import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: [
      {
        id: 0,
        img: "/beach.jpg",
      },
      {
        id: 1,
        img: "/cabin.jpg",
      },
      {
        id: 2,
        img: "/city.jpg",
      },
      {
        id: 3,
        img: "/desert.jpg",
      },
    ],
    currentId: 0,
  },

  reducers: {
    getImage: (state, action) => {
      return state.find((item) => item.id === action.payload);
    },
    increaseCurrentId: (state, action) => {
      if (state.currentId >= state.images.length - 1) {
        state.currentId = 0;
      } else {
        state.currentId = action.payload;
      }
    },
    decreaseCurrentId: (state, action) => {
      console.log(state.images.length);
      if (state.currentId === 0) {
        state.currentId = state.images.length - 1;
      } else {
        state.currentId = action.payload;
      }
    },
  },
});

export const selectImage = (state) =>
  state.images.images[state.images.currentId];

export const selectCurrentId = (state) => state.images.currentId;

export const imageReducer = imagesSlice.reducer;
export const { getImage, increaseCurrentId, decreaseCurrentId } =
  imagesSlice.actions;
