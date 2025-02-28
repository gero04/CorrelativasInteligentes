import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CorrelativasContext } from "../../Context/CorrelativaContext";

function EditarCard({ materia }) {
  const { misMaterias, setMisMaterias } = useContext(CorrelativasContext);

  const [editarModal, setEditarModal] = useState(false);

  const toggleModal = () => {
    setEditarModal(!editarModal);
  };

  useEffect(() => {
    if (editarModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [editarModal]);

  const [estadoSeleccionado, setEstadoSeleccionado] = useState("");

  const actualizarEstadoMateria = (event) => {
    const estadoNuevo = event.target.value;
    setEstadoSeleccionado(estadoNuevo);

    setMisMaterias((materiasPrevias) => {
      const nuevasMaterias = materiasPrevias.map((materiaRecorro) =>
        materiaRecorro.id === materia.id
          ? { ...materiaRecorro, estado: estadoNuevo }
          : materiaRecorro
      );
      return [...nuevasMaterias]; // Crear una nueva referencia para forzar re-render
    });

    console.log("Estado actualizado a:", estadoNuevo);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-cyan-500 dark:text-gray-400 dark:hover:text-white dark:hover:bg-cyan-400 dark:focus:ring-gray-800"
      >
        <h3 className="italic">Editar</h3>
      </button>

      {editarModal && (
        <div className="fixed inset-0 flex items-center justify-center z-90">
          <div
            onClick={toggleModal}
            className="absolute inset-0 bg-neutral-500/50 bg-opacity-30 backdrop-filter backdrop-blur-sm"
          />
          <div className="bg-neutral-500 rounded-lg p-6 z-50 relative w-full max-w-md">
            <div className="flex items-center justify-center">
              <label htmlFor="selectCondicion" className="p-3">
                Establecer estado:{" "}
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="selectCondicion"
                value={estadoSeleccionado}
                onChange={actualizarEstadoMateria}
              >
                <option value="" disabled>
                  Open me!
                </option>
                <option value="Sin cursar">Sin cursar</option>
                <option value="Aprobado">Aprobado</option>
                <option value="Regular">Regular</option>
                <option value="Promocionado">Promocionado</option>
                <option value="Libre">Libre</option>
                <option value="Abandono">Abandono</option>
                <option value="Cursando">Cursando</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                onClick={toggleModal}
                className="mt-4 bg-slate-500 text-white px-4 py-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditarCard;
