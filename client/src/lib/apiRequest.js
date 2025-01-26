import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://imotisupernova.onrender.com",
  withCredentials: false,
});

export default apiRequest;
