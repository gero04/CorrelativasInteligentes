import React from "react";
import { useContext } from "react";
import { CorrelativasContext } from "../Context/CorrelativaContext";
import MateriaCard from "./MateriaCard";
import Navbar from "./Navbar";

function Materias() {
  const { materias } = useContext(CorrelativasContext);
  return (
    <div>
      
      
      
      <h1>holahola hola</h1>
      
      
      {materias.map((materia) => (
        <MateriaCard key={materia.id} materia={materia} />
      ))}
    </div>
  );
}

export default Materias;
