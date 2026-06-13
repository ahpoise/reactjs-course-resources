import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    added(state, action) {
      // Se o produto já está no carrinho, soma 1; senão, cria a linha.
      const line = state.find((l) => l.id === action.payload.id);
      if (line) {
        line.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incremented(state, action) {
      const line = state.find((l) => l.id === action.payload);
      line.quantity += 1;
    },
    decremented(state, action) {
      const line = state.find((l) => l.id === action.payload);
      if (line.quantity > 1) line.quantity -= 1;
    },
    removed(state, action) {
      return state.filter((l) => l.id !== action.payload);
    },
  },
});

// O createSlice gera os action creators a partir dos nomes dos reducers.
export const { added, incremented, decremented, removed } = cartSlice.actions;
export default cartSlice.reducer;
