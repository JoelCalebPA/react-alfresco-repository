import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  //baseURL: "http://35.238.12.167:8080/library/api",
});

export const HOST_URL = "http://localhost:3000";
//export const HOST_URL = "http://www.calebpaytan.site";

export default axiosClient;
