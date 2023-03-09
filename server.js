const express = require("express")
const morgan = require("morgan")
const path = require('path');


const PORT = process.env.PORT || 3000

const server = express()

// Middlewares
server.use(morgan("dev"))
server.use(express.static('src'));
// Middlewares end

server.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"src","index.html"))
})

server.get("/test",(req,res) => {
    res.send("Hello World!")
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))