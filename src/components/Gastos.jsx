import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GastosContext } from "../context/GastosContext";

const validarGasto = (gasto) => {
  const { titulo, valor } = gasto;
  if(titulo === '') return false;
  if(valor === 0) return false;
  return true;
}

const initialStateGasto = {
  titulo: '',
  valor: 0
}

export const Gastos = () => {

  const {total, setTotal} = useContext(GastosContext);

  const [gastos, setGastos] = useState([]);

  const [formGasto, setFormGasto] = useState(initialStateGasto);

  const onChangeGasto = ({ target }) => {
    const newGasto = {
      ...formGasto,
      [target.name] : target.value
    }
    const { valor } = newGasto;

    if(isNaN(valor) || valor < 0) return;

    setFormGasto(newGasto);
  }


  const addGasto = (e) => {
    e.preventDefault();
    if(!validarGasto(formGasto)) return;
    const gasto = {
      ...formGasto,
      id: gastos.length+1
    }
    setGastos([ ...gastos, gasto]);
    setFormGasto(initialStateGasto);
  }

  useEffect(() => {
    const l = gastos.length;
    if(l === 0) return;
    else setTotal(parseInt(total) + parseInt(gastos[l - 1].valor));
  }, [gastos]);

  return (
    <div className="container">
    <div className="mt-5 row box">
          <div className="col-12 col-sm-6">
            <h2>Agreguemos gastos</h2>
            <form onSubmit={ addGasto }>
              <div className="row">
                  <div className="col-12 col-sm-6">
                    <label className="form-label" >Título</label>
                    <input type="text" name="titulo" className="form-control" placeholder="Leche, huevo, etc..." value={ formGasto.titulo } onChange={ onChangeGasto }/>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label" >Valor</label>
                    <input type="number" name="valor" className="form-control" placeholder="15000" value={ formGasto.valor } onChange={ onChangeGasto }/>
                  </div>
              </div>
              <input type="submit" className="btn btn-primary mt-3" value="Agregar" />
            </form>
          </div>
          <ul className="list-group col-12 col-sm-6">
            {
              gastos.map( gasto =>
                <li key={gasto.id} className="list-group-item">
                  <h3>{ gasto.titulo }</h3>
                  <p>{ gasto.valor } $</p>
                </li>
              )
            }
          </ul>
        </div>
    </div>
  )
}
