require("dotenv").config();

const Server = require("./models/server");


// creamos una instancia de la clase Server
const server = new Server();

// lanzamos el metodo listen()
server.listen()