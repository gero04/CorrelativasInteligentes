import React from "react";
import { useContext } from "react";
import { CorrelativasContext } from "../Context/CorrelativaContext";
import MateriaCard from "./MateriaCard";
import Navbar from "./Navbar";

function Materias() {
  const { materias } = useContext(CorrelativasContext);
  return (
    <div>
      <h3 className="text-center bold italic">Materias de Primer año</h3>
      {materias
        .filter((materia) => materia.nivel === 1)
        .map((materia) => (
          <MateriaCard key={materia.id} materia={materia} />
        ))}
      <h3 className="text-center bold italic">Materias de Segundo año</h3>
      {materias
        .filter((materia) => materia.nivel === 2)
        .map((materia) => (
          <MateriaCard key={materia.id} materia={materia} />
        ))}
      <h3 className="text-center bold italic">Materias de Tercer año</h3>
      {materias
        .filter((materia) => materia.nivel === 3)
        .map((materia) => (
          <MateriaCard key={materia.id} materia={materia} />
        ))}
      <h3 className="text-center bold italic">Materias de Cuarto año</h3>
      {materias
        .filter((materia) => materia.nivel === 4)
        .map((materia) => (
          <MateriaCard key={materia.id} materia={materia} />
        ))}
      <h3 className="text-center bold italic">Materias de Quinto año</h3>
      {materias
        .filter((materia) => materia.nivel === 5)
        .map((materia) => (
          <MateriaCard key={materia.id} materia={materia} />
        ))}
    </div>
  );
}

export default Materias;
