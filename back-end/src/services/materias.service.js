//Importamos el listado de las materias obligatorias
const {materiasObligatorias} = require('../data/dataMaterias.js')

//Base de datos temporal en memoria
let materias = [...materiasObligatorias]

const getAllmaterias = () => {
    return materias
}

const getMateriasById = (id) => {
    let materia = materias.find(m => m.id === id)
    if (!materia) {
        throw new error(`No se encontro la materia con id ${id}`)
    }
    else {
        return materia
    }
}

const validateMateria = (materiaData) => {
    //Array de objetos contra los que puedo validar
  const validations = [
    { field: 'nombreCorto', message: 'Falta introducir el nombre corto' },
    { field: 'nombreCompleto', message: 'Falta introducir el nombre completo' },
    { field: 'integradora', message: 'Falta introducir si es integradora' },
    { field: 'cargaHoraria', message: 'Falta introducir la carga horaria' },
    { field: 'nivel', message: 'Falta introducir el nivel' },
    { field: 'modalidad', message: 'Falta introducir la modalidad' },
    { field: 'area', message: 'Falta introducir el área' },
    { field: 'bloqueDeConocimiento', message: 'Falta introducir el bloque de conocimiento' },
    { field: 'objetivo', message: 'Falta introducir el objetivo' }
  ];
//Recorro todas las validaciones y si alguna es verdadera entonces lanzo un mensaje de error
  for (const validation of validations) {
    if (materiaData[validation.field] === undefined || 
        materiaData[validation.field] === null ||
        materiaData[validation.field] === '') {
      throw new Error(validation.message);
    }
  }

  // Validaciones especiales para arrays
  if (!Array.isArray(materiaData.correlativasRegulares)) {
    throw new Error('Las correlativas regulares deben ser un array');
  }
  
  if (!Array.isArray(materiaData.correlativasAprobadas)) {
    throw new Error('Las correlativas aprobadas deben ser un array');
  }
  
  // Los arrays pueden estar vacíos, pero deben existir
  if (materiaData.correlativasRegulares === undefined) {
    throw new Error('Falta introducir las correlativas regulares');
  }
  
  if (materiaData.correlativasAprobadas === undefined) {
    throw new Error('Falta introducir las correlativas aprobadas');
  }
};