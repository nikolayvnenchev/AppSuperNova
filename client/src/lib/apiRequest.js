import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://appsupernova.onrender.com",
  withCredentials: true,
});

export default apiRequest;
