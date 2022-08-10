import { useContext } from "react";
import { GastosContext } from "../context/GastosContext";

export const Resumen = () => {
  const { total, division } = useContext(GastosContext);
  return (
      <div className="container mt-5 summary box">
      <div className="row">
        <div className="col-12 col-sm-6">
          <h2>Total</h2>
          <hr />
          <p>{total} $</p>
        </div>
        <div className="col-12 col-sm-6">
          <h2>Tu parte</h2>
          <hr />
          <p>{total%division === 0 ? total/division : Math.floor(total/division)+1} $</p>
        </div>
      </div>
    </div>
  )
}
