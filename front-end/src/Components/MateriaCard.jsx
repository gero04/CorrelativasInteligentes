import React from 'react'

function MateriaCard({materia}) {
  return (
    <div>
        <h3 className=''>#{materia.id}. {materia.nombreCompleto} </h3>
    </div>
  )
}

export default MateriaCard