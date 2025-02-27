import React, { useState } from "react";

function MateriaCard({ materia }) {
  const [modalCard, setModalCard] = useState(false);

  const toggleModal = () => {
    setModalCard(!modalCard);
  };

  if(modalCard) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <button onClick={toggleModal} className="bg-gray-800 text-white p-4 m-4 rounded-lg inline-block">
    <h3 className="text-xl font-bold capitalize">
        {materia.nombreCorto}
        </h3>
    </button>

    {modalCard && 
      <div className="modal">

        <div onClick={toggleModal} className="overlay" />
        <div className="modal-content">
          <h2>Hello Modal</h2>
          <button onClick={toggleModal} className="close-modal">CLOSE</button>
        </div>


      </div>
    }
    </>
  );
}

export default MateriaCard;


{/* 
  <>

<div className="bg-gray-800 text-white p-4 m-4 rounded-lg inline-block">
      <h3 className="text-xl font-bold capitalize">
        #{materia.id} . {materia.nombreCorto}
      </h3>
      <p className="text-gray-500 text-sm">{materia.nombreCompleto}</p>
    </div>

  </> */}