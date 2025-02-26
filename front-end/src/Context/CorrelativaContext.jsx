import { useState, useEffect, createContext } from "react";
import { materiasObligatorias as materias } from "../data/materiasObligatorias";

export const CorrelativasContext = createContext();

export function CorrelativasContextProvider(props) {
  const [materias, setMaterias] = useState([]);
  const [electivas, setElectivas] = useState([]);

  useEffect(() => {
    setMaterias(materias);
    setElectivas(electivas)
  }, []);

  return (
    <TaskContext.Provider value={{materias, electivas}}>
      {props.children}
    </TaskContext.Provider>
  );
}
