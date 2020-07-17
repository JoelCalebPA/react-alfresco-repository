import React, { useEffect } from "react";
import { getReportAction } from "../../actions/ReportAction";
import Sale from "./Sale";
import { useSelector, useDispatch } from "react-redux";

const Sales = () => {
  const report = useSelector((state) => state.report.report);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReportAction());
  }, [dispatch]);

  return (
    <div className="subscriptions-component">
      <div className="subscriptions-container">
        <div className="subscriptions">
          <h2 className="text-center mb-4 font-weight-bold">Lista de Ventas</h2>
          <table>
            <thead>
              <tr>
                <th>Cantidad Vendida</th>
                <th>Libro</th>
              </tr>
            </thead>
            <tbody>
              {report && report.map((s) => <Sale key={s.book.title} sale={s} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sales;
