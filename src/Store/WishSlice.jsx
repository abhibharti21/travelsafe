import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const WishSlice = createSlice({
  name: "WishSlice",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { add, remove } = WishSlice.actions;

export default WishSlice.reducer;
