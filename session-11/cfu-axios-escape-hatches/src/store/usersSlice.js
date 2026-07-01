import { createSlice } from "@reduxjs/toolkit";

// O status do fetch vive na store, ao lado dos dados dos users
const usersSlice = createSlice({
  name: "users",
  initialState: { list: [], status: "idle" }, // idle | loading | succeeded | failed
  reducers: {
    usersLoading(state) {
      state.status = "loading";
    },
    usersLoaded(state, action) {
      state.list = action.payload;
      state.status = "succeeded";
    },
    usersFailed(state) {
      state.status = "failed";
    },
    added(state, action) {
      state.list.push(action.payload);
    },
    updated(state, action) {
      const index = state.list.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleted(state, action) {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
  },
});

export const {
  usersLoading,
  usersLoaded,
  usersFailed,
  added,
  updated,
  deleted,
} = usersSlice.actions;
export default usersSlice.reducer;
