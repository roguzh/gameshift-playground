import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.gameshift.dev/nx",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.GAMESHIFT_API_KEY,
  },
});

export default axiosInstance;
