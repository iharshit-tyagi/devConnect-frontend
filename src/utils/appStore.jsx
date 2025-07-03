import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx";
import userListReducer from "./userListSlice.jsx";
export const appStore = configureStore({
  reducer: {
    user: userReducer,
    userList: userListReducer,
  },
});
export default appStore;
