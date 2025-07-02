import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx";
export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default appStore;
