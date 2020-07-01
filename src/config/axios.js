import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  //baseURL: "http://34.68.208.245:8080/library/api",
});

export default axiosClient;