import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://34.68.208.245:8080/library/api",
});

export default axiosClient;