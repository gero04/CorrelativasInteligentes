import React from "react";
import { useContext } from "react";
import { CorrelativasContext } from "../../Context/CorrelativaContext";
import EditarCard from "./EditarCard";
import Cursable from "./Cursable";

function TablaMaterias() {
  const { misMaterias } = useContext(CorrelativasContext);

  const obtenerEstilo = (estadoDeLaMateria) => {
    switch (estadoDeLaMateria) {
      case "Sin cursar":
        return "h-auto bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white";
      case "Abandono":
        return "h-auto bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white";
      case "Libre":
        return "h-auto bg-white border-b dark:bg-red-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-red-600 dark:text-white";
      case "Regular":
        return "h-auto bg-white border-b dark:bg-yellow-600 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-yellow-500 dark:text-white";
      case "Aprobado":
        return "h-auto bg-white border-b dark:bg-green-600 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-green-500 dark:text-white";
      case "Promocionado":
        return "h-auto bg-white border-b dark:bg-violet-700 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-violet-600 dark:text-white";
      case "Cursando":
        return "h-auto bg-white border-b dark:bg-sky-600 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-sky-500 dark:text-white";
      default:
        return "h-auto bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white";
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <table className="table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th className="py-2 px-4 border">ID</th>
          <th className="py-2 px-4 border">Nombre</th>
          <th className="py-2 px-4 border">Modalidad</th>
          <th className="py-2 px-4 border">Estado</th>
          <th className="py-2 px-4 border">Actualizar</th>
          <th className="py-2 px-4 border">La puedo cursar?</th>
          
        </thead>
        <tbody>
          {misMaterias.map((materia) => (
            <tr key={materia.id} className={obtenerEstilo(materia.estado)}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {materia.id}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {materia.nombre}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {materia.modalidad}
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {materia.estado}
              </td>
              <td className="px-6 py-4">
                <EditarCard materia={materia} ></EditarCard>
              </td>
              <td><Cursable materiaActual={materia} /></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaMaterias;
