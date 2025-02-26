import React from "react";
import { useContext } from "react";
import { CorrelativasContext } from "../Context/CorrelativaContext";
import MateriaCard from "./MateriaCard";
import Navbar from "./Navbar";

function Materias() {
  const { materias } = useContext(CorrelativasContext);
  return (
    <div>
      <Navbar />

      {materias.map((materia) => (
        <MateriaCard key={materia.id} materia={materia} />
      ))}
    </div>
  );
}

export default Materias;
