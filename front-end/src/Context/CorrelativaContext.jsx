import { useState, useEffect, createContext } from "react";
import { materiasObligatorias as dataMaterias } from "../data/materiasObligatorias";

export const CorrelativasContext = createContext();

export function CorrelativasContextProvider(props) {
  const [materias, setMaterias] = useState([]);
  const [electivas, setElectivas] = useState([]);

  useEffect(() => {
    setMaterias(dataMaterias);
  }, []);

  return (
    <CorrelativasContext.Provider value={{ materias, electivas }}>
      {props.children}
    </CorrelativasContext.Provider>
  );
}
