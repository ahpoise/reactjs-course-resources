import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data.js";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: items,
  reducers: {
    added(state, action) {
      state.push(action.payload);
    },
    toggledWatched(state, action) {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.watched = !item.watched;
    },
    removed(state, action) {
      return state.filter((i) => i.id !== action.payload);
    },
  },
});

export const { added, toggledWatched, removed } = watchlistSlice.actions;
export default watchlistSlice.reducer;
