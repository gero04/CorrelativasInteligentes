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
            cantidadParciales: {type: Number, min: 0},
            cantidadTrabajosPracticos: {type: Number, min: 0},
            cantidadPresentaciones: {type: Number, min: 0},
            cantidadLaboratorios: {type: Number, min: 0},
            cantidadClasesInvertidas: {type: Number, min: 0}
        },
        //Array donde se va a cargar las instancias evaluativas como tal
        instanciasEvaluativas: {
            parciales: [{
                numeroDeParcial: {type: Number, min: 1},
                tipoDeParcial: {type: String, enum: ['Teorico', 'Practico', 'Integrado']},
                notaDeParcial: {type: Number, min: 0, max: 10},
                fechaDeParcial: {type: Date, default: Date.now},
                aprobado: {type: Boolean} //En teoria este se tendria que calcular automaticamente 
            }],
            trabajosPracticos: [{
                nombreDeTrabajoPractico: {type: String},
                numeroDeTrabajoPractico: {type: Number, min: 1},
                notaDeTrabajoPractico: {type: Number, min: 0, max: 10},
                fechaEntregaDeTrabajoPractico: {type: Date, default: Date.now},
                aprobado: {type: Boolean}
            }],
            laboratorios: [{
                nombreDeLaboratorio: {type: String},
                numeroDeLaboratorio: {type: Number, min: 1},
                notaDeLaboratorio: {type: Number, min: 0, max: 10},
                fechaDeLaboratorio: {type: Date, default: Date.now},
                aprobado: {type: Boolean}
            }],
            presentaciones: [{
                nombreDePresentacion: {type: String},
                numeroDePresentacion: {type: Number, min: 1},
                notaDePresentacion: {type: Number, min: 0, max: 10},
                fechaDePresentacion: {type: Date, default: Date.now},
                aprobado: {type: Boolean}
            }],
            clasesInvertidas: [{
                nombreDeClaseInvertida: {type: String},
                numeroDeClaseInvertida: {type: Number, min: 1},
                notaDeClaseInvertida: {type: Number, min: 0, max: 10},
                fechaDeClaseInvertida: {type: Date, default: Date.now},
                aprobado: {type: Boolean}
            }]
        }
    }
    ],
    ultimaActualizacion: {
            type: Date,
            default: Date.now
        }
}

module.exports = progresoSchema