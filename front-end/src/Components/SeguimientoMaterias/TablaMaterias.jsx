import React from "react";
import { useContext } from "react";
import { CorrelativasContext } from "../../Context/CorrelativaContext";

function TablaMaterias() {
  const { misMaterias } = useContext(CorrelativasContext);

  return misMaterias.map((materia) => (
    <>
      <h1>
        ID: {materia.id} - Nombre: {materia.nombre}
      </h1>
      <p>Modalidad: {materia.modalidad} - Estado: {materia.estado} </p>
      <br/>
    </>
  ));
}

export default TablaMaterias;
