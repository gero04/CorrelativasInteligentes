import React from 'react'
import { useContext } from "react";
import { CorrelativasContext } from "../../Context/CorrelativaContext";

function TablaMaterias() {
    const {misMaterias} = useContext(CorrelativasContext)
    console.log(misMaterias)
    misMaterias.map((materia) => {console.log(materia.nombreCompleto)})
  return (
    <h1>hola</h1>
  )
}


export default TablaMaterias