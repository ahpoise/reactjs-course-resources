import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice.js";

// configureStore junta os reducers numa só store e liga o Redux DevTools
// e o middleware por default.
export const store = configureStore({
  reducer: { users: usersReducer },
});
