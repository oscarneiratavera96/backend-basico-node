const { response, request } = require("express");

const usuarioGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = "1", limit } = req.query;
  res.json({
    msg: "get API- controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuarioPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API- usuarioPost",
    nombre,
    edad,
  });
};

const usuarioPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "put API- usuarioPut",
    id,
  });
};

const usuarioPatch = (req, res = response) => {
  res.json({
    msg: "patch API- usuarioPatch",
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "delete API- usuarioDelete",
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete,
};
