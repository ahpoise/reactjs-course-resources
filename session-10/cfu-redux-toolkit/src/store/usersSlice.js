import { createSlice } from "@reduxjs/toolkit";
import { users } from "../users.js";

// O usersReducer da s9 passa a ser uma slice: o nome "users" passa a ser a fatia
// no state global e cada reducer gera o seu action creator automaticamente.
const usersSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    // Podemos "mutar" (state.push em vez de [...state]); Redux Toolkit trata disto por nós.
    added(state, action) {
      state.push(action.payload);
    },
    updated(state, action) {
      const index = state.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    // Ou mutamos, ou devolvemos uma array nova: aqui devolvemos com filter.
    deleted(state, action) {
      return state.filter((u) => u.id !== action.payload);
    },
  },
});

export const { added, updated, deleted } = usersSlice.actions;
export default usersSlice.reducer;
