import { useState } from "react";
import { useContext } from "react";
import { GastosContext } from "../context/GastosContext";

export const Division = () => {
    const {division, setDivision} = useContext(GastosContext);
    const [divisionUi, setdivisionUi] = useState(1);

    const handleDivisionChange = ({target}) => {
        if(isNaN(target.value)) return;
        if(target.value < 1) setDivision(1);
        else setDivision(parseInt(target.value));
        setdivisionUi(target.value);
    }
  return (
    <div className="container mt-5 box">
        <h2>¿Cuántos somos?</h2>
        <form>
            <div className="row">
                <div className="col-12 col-sm-4">
                    <label className="form-label">Cantidad personas</label>
                    <input type="number" name="division" className="form-control" placeholder="2" value={ divisionUi } onChange={ handleDivisionChange } />
                </div>
            </div>
        </form>
    </div>
  )
}
