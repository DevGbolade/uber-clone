import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import navSlice from "./features/nav/navSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    nav: navSlice,
  },
});
