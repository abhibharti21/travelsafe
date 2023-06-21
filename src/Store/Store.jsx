import { configureStore } from "@reduxjs/toolkit";
import WishSlice from "./WishSlice";

const store = configureStore({
  reducer: {
    wish: WishSlice,
  },
});

export default store;
