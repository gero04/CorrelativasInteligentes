//Importamos el middleware cors que permite requests del frontend
const cors = require("cors")

//Importamos el framework express que crea el servidor web
const express = require("express")

//Importamos los datos de las materias
const materias = require('./src/data/dataMaterias.js')

//Iniciamos la aplicacion express
const app = express()

//Definimos el puerto por el cual van a llegar las peticiones
const PORT = 8080

//Configuramos el cors para solamente aceptar peticiones de localhost:5173
const corsOptions = {
    origin: ["http://localhost:5173"]
}

// La aplicacion ahora utiliza las opciones CORS previamente definidas
app.use(cors(corsOptions))

//Ruta basica para la raiz
app.get('/', (request, response) => {
    response.json({
        message: 'El servidor anda ok',
        endpoints: {
            materias: "/api/materias",
            materiaId: "/api/materias/:id"
        }
    })
})
// Obtengo todas las materias en localhost:PORT/api/materias
app.get('/api/materias/', (request, response) => {
    
    //Si no hay materias (o el backend esta caido), devuelvo un error
    if (!materias) {
        return response.status(404).json({
            error: 404,
            message: "No hay materias para mostrar"
        })
    }

    //Muestro las materias
    else {
        response.json(materias)
    }
})

//Obtengo una materia por su id
app.get('/api/materias/:id', (request, response) => {

    //Paso el valor id de la request a tipo int
    const id = parseInt(request.params.id)

    //Busco la materia
    const materia = materias.find(m => m.id === id)

    //Si la materia no existe, devuelvo un error
    if (!materia) {
        return response.status(404).json({
            status: 404,
            message: `No se encontro la materia con id ${id}`
        })
    }

    //Si la materia existe, devuelvo la materia
    else {
        response.json(materia)
    }
})

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`))