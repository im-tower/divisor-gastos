import { useState } from "react";
import { GastosContext } from "./GastosContext"


export const GastosProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
    const [division, setDivision] = useState(1);
  return (
    <GastosContext.Provider value={{total, setTotal, division, setDivision}}>
        { children }
    </GastosContext.Provider>
  )
}
