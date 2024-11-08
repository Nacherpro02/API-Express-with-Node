require('dotenv').config()

const express = require("express")
const app = express()
const PORT = process.env.API_PORT

app.use(express.json())

const apiRoutes = require("./src/routes/apiRoutes")
app.use("/api", apiRoutes)

app.listen(PORT, () => {    
    console.log(`Server en http://localhost:${PORT}`)
})