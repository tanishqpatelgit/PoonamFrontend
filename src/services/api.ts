import axios from "axios";

// Base API instance
const api = axios.create({
 baseURL: "http://135.235.194.88/api", // ✅ backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
