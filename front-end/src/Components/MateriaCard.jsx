import React, { useState } from "react";

function MateriaCard({ materia }) {
  const [modalCard, setModalCard] = useState(false);

  const toggleModal = () => {
    setModalCard(!modalCard);
  };

  return (
    <div className="bg-gray-800 text-white p-4 m-4 rounded-lg inline-block">
      <h3 className="text-xl font-bold capitalize">
        #{materia.id} . {materia.nombreCorto}
      </h3>
      <p className="text-gray-500 text-sm">{materia.nombreCompleto}</p>
    </div>
  );
}

export default MateriaCard;
