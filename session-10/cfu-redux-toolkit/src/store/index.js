import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

// A chave "cart" é o nome da fatia no state global: lês com state.cart.
export const store = configureStore({
  reducer: { cart: cartReducer },
});
