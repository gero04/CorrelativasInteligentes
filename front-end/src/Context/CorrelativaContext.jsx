import { useState, useEffect, createContext } from "react";
import { materiasObligatorias as dataMaterias } from "../data/materiasObligatorias";

export const CorrelativasContext = createContext();

export function CorrelativasContextProvider(props) {
  const [materias, setMaterias] = useState([]);
  const [electivas, setElectivas] = useState([]);
  const [misMaterias, setMisMaterias] = useState([]);
  console.log(misMaterias);
  useEffect(() => {
    setMaterias(dataMaterias);

    setMisMaterias(
      dataMaterias.map(
        materia => (
          {
            id: materia.id,
            nombre: materia.nombreCompleto,
            modalidad: materia.modalidad,
            estado: 'Sin cursar'
          }
        )
      )
    )
  }, []);

  return (
    <CorrelativasContext.Provider value={{ materias, electivas, misMaterias }}>
      {props.children}
    </CorrelativasContext.Provider>
  );
}
