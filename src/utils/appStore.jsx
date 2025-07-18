import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx";
import userListReducer from "./userListSlice.jsx";
import matchReducer from "./matchesSlice.jsx";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
    userList: userListReducer,
    match: matchReducer,
  },
});

export default appStore;
