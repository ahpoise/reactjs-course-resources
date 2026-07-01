import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../api/users";

// O status do fetch vive na store, ao lado dos dados, para sobreviver à navegação.
// discriminated-union-friendly: o status é uma union de literais.
type Status = "idle" | "loading" | "succeeded" | "failed";
export type UsersState = { list: User[]; status: Status };

const initialState: UsersState = { list: [], status: "idle" };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersLoading(state) {
      state.status = "loading";
    },
    usersLoaded(state, action: PayloadAction<User[]>) {
      state.list = action.payload;
      state.status = "succeeded";
    },
    usersFailed(state) {
      state.status = "failed";
    },
    added(state, action: PayloadAction<User>) {
      state.list.push(action.payload);
    },
    updated(state, action: PayloadAction<User>) {
      const index = state.list.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleted(state, action: PayloadAction<string>) {
      state.list = state.list.filter((u) => u.id !== action.payload);
    },
  },
});

export const { usersLoading, usersLoaded, usersFailed, added, updated, deleted } =
  usersSlice.actions;
export default usersSlice.reducer;
