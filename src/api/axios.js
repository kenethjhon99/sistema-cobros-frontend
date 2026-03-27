import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//interceptor de token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const institucionId = localStorage.getItem("institucionId");

  config.headers = config.headers || {};

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (institucionId) {
    config.headers["x-institucion-id"] = institucionId;
  }
  return config;
});
