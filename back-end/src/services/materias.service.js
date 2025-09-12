//Importamos el listado de las materias obligatorias
const { materiasObligatorias } = require("../data/dataMaterias.js");

//Base de datos temporal en memoria
let materias = [...materiasObligatorias];

const getMaterias = () => {
  return materias;
};

const getMateriasById = (id) => {
  let materia = materias.find((m) => m.id === id);
  if (!materia) {
    throw new error(`No se encontro la materia con id ${id}`);
  } else {
    return materia;
  }
};

const validateMateria = (materiaData) => {
  //Array de objetos contra los que puedo validar
  const validations = [
    { field: "nombreCorto", message: "Falta introducir el nombre corto" },
    { field: "nombreCompleto", message: "Falta introducir el nombre completo" },
    { field: "integradora", message: "Falta introducir si es integradora" },
    { field: "cargaHoraria", message: "Falta introducir la carga horaria" },
    { field: "nivel", message: "Falta introducir el nivel" },
    { field: "modalidad", message: "Falta introducir la modalidad" },
    { field: "area", message: "Falta introducir el área" },
    {
      field: "bloqueDeConocimiento",
      message: "Falta introducir el bloque de conocimiento",
    },
    { field: "objetivo", message: "Falta introducir el objetivo" },
  ];
  //Recorro todas las validaciones y si alguna es verdadera entonces lanzo un mensaje de error
  for (const validation of validations) {
    if (
      materiaData[validation.field] === undefined ||
      materiaData[validation.field] === null ||
      materiaData[validation.field] === ""
    ) {
      throw new Error(validation.message);
    }
  }

  // Validaciones especiales para arrays
  if (!Array.isArray(materiaData.correlativasRegulares)) {
    throw new Error("Las correlativas regulares deben ser un array");
  }

  if (!Array.isArray(materiaData.correlativasAprobadas)) {
    throw new Error("Las correlativas aprobadas deben ser un array");
  }

  // Los arrays pueden estar vacíos, pero deben existir
  if (materiaData.correlativasRegulares === undefined) {
    throw new Error("Falta introducir las correlativas regulares");
  }

  if (materiaData.correlativasAprobadas === undefined) {
    throw new Error("Falta introducir las correlativas aprobadas");
  }

  //El ID de la materia debe ser un numero
  if (typeof materiaData.id !== "number") {
    throw new Error("El ID debe ser un número");
  }

  //La materia debe tener una carga horaria positiva
  if (materiaData.cargaHoraria < 0) {
    throw new Error("La carga horaria debe ser positiva");
  }

  //La materia debe tener una modalidad que sea anual o cuatrimestral
  if (!["Anual", "Cuatrimestral"].includes(materiaData.modalidad)) {
    throw new Error('Modalidad debe ser "Anual" o "Cuatrimestral"');
  }
};

const createMateria = (materiaData) => {
  validateMateria(materiaData);

  //Validar que la materia tenga un ID unico
  const materiaExistentePorId = materias.find((m) => m.id === materiaData.id);
  if (materiaExistentePorId) {
    throw new Error(
      `Ya existe una materia con el ID ${materiaData.id} (${materiaExistentePorId.nombreCorto})`
    );
  }

  //También validar por nombre corto (evitar duplicados)
  const materiaExistentePorNombre = materias.find(
    (m) => m.nombreCorto === materiaData.nombreCorto
  );
  if (materiaExistentePorNombre) {
    throw new Error(
      `Ya existe una materia con el nombre corto "${materiaData.nombreCorto}" (ID: ${materiaExistentePorNombre.id})`
    );
  }

  //Si la materia no existe, crear variable intermedia con los datos y agregarla a las materias ya existentes
  let nuevaMateria = {
    ...materiaData,
  };
  materias.push(nuevaMateria);

  return nuevaMateria;
};

const getMateriasByArea = (area) => {
    return materias.filter(m.area === area)
}

const getMateriasByNivel = (nivel) => {
    return materias.filter(m.nivel === nivel)
}

const deleteMateria = (id) => {

    //Buscamos el indice de la materia a borrar
  const index = materias.findIndex(m => m.id === id);

  //Si no se encuentra la materia se informa
  if (index === -1) throw new Error('Materia no encontrada');
  
  //Si se encuentra se informa y se borra la materia
  console.log(`Se borro la materia ${materias[index].nombre} con ID ${materias[index].id}`)
  return materias.splice(index, 1)[0];
};

const updateMateria = (id, updates) => {
  
  //BUscamos el indice de la materia a actualizar
    const index = materias.findIndex(m => m.id === id);
  //Si no se encuentra la materia se informa
    if (index === -1) throw new Error('Materia no encontrada');
  
  // Validar que no se intente cambiar el ID
  if (updates.id !== undefined && updates.id !== id) {
    throw new Error('No se puede modificar el ID de una materia');
  }
  
  materias[index] = {
    ...materias[index],
    ...updates
  };
  
  return materias[index];
};

module.exports = {
  getMaterias,
  getMateriasById,
  createMateria,
  updateMateria,
  deleteMateria
};
