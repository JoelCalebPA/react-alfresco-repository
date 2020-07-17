import { REPORT, REPORT_OK, REPORT_ERROR } from "../types";
import axiosClient from "../config/axios";
import { getToken } from "../utils/Commons";

export function getReportAction() {
  return async (dispatch) => {
    dispatch(getReport());
    try {
      // enviando el libro a la API
      const response = await axiosClient.get("/admin/report/booksByQuantity", {
        headers: { Authorization: "Bearer " + getToken() },
      });
      dispatch(getReportOk(response.data));
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(getReportError(true));
    }
  };
}

const getReport = () => ({
  type: REPORT,
  payload: true,
});

const getReportOk = (report) => ({
  type: REPORT_OK,
  payload: report,
});

const getReportError = (state) => ({
  type: REPORT_ERROR,
  payload: state,
});
