import axios from "axios";
import { getUser, getTicket } from "../utils/Commons";

export const getSites = () => {
  return axios.get(
    "http://207.246.78.28:8080/alfresco/s/api/people/" + getUser() + "/sites?alf_ticket=" +
      getTicket()
  );
};
