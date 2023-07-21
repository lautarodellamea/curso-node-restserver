// aca definiremos la logica de las rutas para ir separando todo mejor

// para que el autocompletado nos funcione, con la request tambien podemos hacerlo
const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  // obtenemos todos los parametros
  // http://localhost:8080/api/usuarios?q=hola&nombre=lauti&apikey=1894320
  // const query = req.query;
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

  res.json({
    msg: "get API - controlador",
    // query
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPost = (req, res = response) => {
  // const body = req.body;

  // de esta forma solo tomamos lo que queremos
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - controlador",
    // body,
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "put API - controlador",
    id,
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
