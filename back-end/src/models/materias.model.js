const materiasSchema = {
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nombreCorto: {
        type: String,
        required: true,
        unique: true
    },
    nombreCompleto: {
        type: String,
        required: true,
        unique: true
    },
    integradora: {
        type: Boolean,
        required: true,
        unique: false
    },
    cargaHoraria: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    nivel: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    correlativasRegulares: {
        type: [Number],
        required: true,
        unique: false
    },
    correlativasAprobadas: {
        type: [Number],
        required: true,
        unique: false
    },
    modalidad: {
        type: String,
        enum: ['Anual', 'Cuatrimestral'],
        required: true
    },
    area: {
        type: String,
        required: true,
        unique: false
    },
    bloqueDeConocimiento: {
        type: String,
        required: true,
        unique: false
    },
    objetivo: {
        type: String,
        required: true,
        unique: false
    }
}

module.exports = materiasSchema