import axios from "axios";

// O backend é um projeto mockapi.io.
// A baseURL é o endpoint base do projeto.
export const api = axios.create({
  baseURL: "https://69144da9f34a2ff1170f59bc.mockapi.io/api",
});
