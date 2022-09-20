import axios from "axios";

export const API = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});
