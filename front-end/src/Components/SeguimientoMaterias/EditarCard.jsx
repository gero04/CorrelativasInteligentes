import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CorrelativasContext } from "../../Context/CorrelativaContext";

function EditarCard() {
  const { misMaterias } = useContext(CorrelativasContext);

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
            <h3>hola esto si anda</h3>
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
