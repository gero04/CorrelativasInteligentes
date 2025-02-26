const express = require("express")
const app = express()
const PORT = 8080
const cors = require("cors")
const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions))

app.get("/api", (request, response) => {
    response.json({fruits: ["apple", 'orange', 'banana']})
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})