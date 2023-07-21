// express basado en clases
// para ser mas ordenados

const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // rutas de mi aplicacion
    this.routes();
  }

  // Middlewares: son funciones que añaden otras funciones a el webserver, se ejecuta siempre que levantemos el servidor, cuando vemos el "use" es un middleware
  middlewares() {
    // cors
    this.app.use(cors());

    // Lectura y parseo del body
    // cualquier info que venga en el post, delete, etc lo va serializar a formato json
    this.app.use(express.json());

    // servimos la carpeta publica
    this.app.use(express.static("public"));
  }

  // en este metodo que creamos definiremos las rutas
  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
