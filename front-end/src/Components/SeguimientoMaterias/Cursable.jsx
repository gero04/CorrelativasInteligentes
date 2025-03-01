import React, { useContext } from "react";
import { CorrelativasContext } from "../../Context/CorrelativaContext";

function Cursable({ materiaActual }) {
  const materias = useContext(CorrelativasContext);
  //console.log(materias.materias) // todos los atributos
  //console.log(materiaActual) //estado id modalidad nombre
  let correlativasRegulares = materias.misMaterias.filter((materia) =>
    materiaActual.correlativasRegulares.includes(materia.id)
  );
  let correlativasAprobadas = materias.misMaterias.filter((materia) =>
    materiaActual.correlativasAprobadas.includes(materia.id)
  );
  let regularOMas = ["Regular", "Promocionado", "Aprobado"];
  console.log("Correlativas reg:")
  console.log(correlativasRegulares)
  console.log("correlativas apr: ")
  console.log(correlativasAprobadas)
  if (
    correlativasAprobadas.every((materia) => materia.estado === "Aprobado") &&
    correlativasRegulares.every((materia) =>
      regularOMas.includes(materia.estado)
    )
  ) {
    return <div>Cursable</div>;
    
  } else return (<div>No cursable</div>
    
  );
  
}

export default Cursable;
