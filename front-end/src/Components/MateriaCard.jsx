import React, { useState, useEffect } from "react";

function MateriaCard({ materia }) {
  const [modalCard, setModalCard] = useState(false);

  const toggleModal = () => {
    setModalCard(!modalCard);
  };

  
  useEffect(() => {
    if (modalCard) {
      document.body.classList.add('overflow-hidden')
    }
    else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [modalCard])

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-gray-800 text-white p-4 m-4 rounded-lg inline-block"
      >
        <h3 className="text-xl font-bold capitalize">{materia.nombreCorto}</h3>
      </button>

      {modalCard && (
        <div className="fixed inset-0 flex items-center justify-center z-90">
          <div
            onClick={toggleModal}
            className="absolute inset-0 bg-indigo-300/50 bg-opacity-30 backdrop-filter backdrop-blur-sm"
          />
          <div className="bg-white rounded-lg p-6 z-50 relative w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              {materia.nombreCompleto}
            </h2>
            <p>Nivel: {materia.nivel}</p>
            <p>
              Es integradora?{" "}
              {materia.integradora ? (
                <p>Si, es integradora</p>
              ) : (
                <p>No, no es integradora</p>
              )}
            </p>
            <div className="flex justify-center">
            <button onClick={toggleModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Cerrar
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MateriaCard;

{
  /* 
  <>

<div className="bg-gray-800 text-white p-4 m-4 rounded-lg inline-block">
      <h3 className="text-xl font-bold capitalize">
        #{materia.id} . {materia.nombreCorto}
      </h3>
      <p className="text-gray-500 text-sm">{materia.nombreCompleto}</p>
    </div>

  </> */
}
