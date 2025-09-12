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
    switch (materiaData) {
        case !materiaData.id:
            throw new error('Falta introducir el id')
        case !materiaData.nombreCorto:
            throw new error('Falta introducir el nombre corto')
        case !materiaData.nombreCompleto:
            throw new error('Falta introducir el nombre completo')
        case !materiaData.integradora:
            throw new error('Falta introducir el booleano de integradora')
        case
    }
}