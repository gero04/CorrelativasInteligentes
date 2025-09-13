const progresoSchema = {
    //Funciona como un identificador del estudiante
    idEstudiante: {
        type: Number,
        required: true,
        unique: true
    },
    /*
    Array con las materias, cada materia tiene estado, cantidad de parciales,
    cantidad de tps, cantidad de laboratorios, cantidad de presentaciones?
    cantidad de seminarios? no se, en COM tenes 3 seminarios, en DSI tenes 1 presentacion
    esta facultad es un quilombo y no se porque corno no se ponen de acuerdo en como evaluar
    */
    progresoDeMaterias: [{
        idMateria: {
            type: Number,
            required: true
        },
        estadoMateria: {
            type: String,
            enum: ['Libre', 'Regular', 'Aprobado', 'Promocionado', 'Inscripto', 'No cursó', 'Abandono'],
            default: 'Inscripto'
        },
        //Cuantos tps/parciales/laboratorios/actividades tiene? importante que sea conocido el numero, por eso no pongo cant clases
        configuracionMateria: {
            cantidadParciales: {type: Number, min: 0, max: 10},
            cantidadTrabajosPracticos: {type: Number, min: 0, max: 20},
            cantidadPresentaciones: {type: Number, min: 0, max: 20},
            cantidadLaboratorios: {type: Number, min: 0, max: 0},
            cantidadClasesInvertidas: {type: Number, min: 0, max: 0}
        }
    }
    ]
}

module.exports = progresoSchema