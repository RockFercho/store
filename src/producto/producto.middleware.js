'use strict';
const ajvEsquemaDeValidacion = require('./producto.esquema-validador');

function esquemadeValidacionGuardar(req, res, next) {
  let validacion = ajvEsquemaDeValidacion.validadorGuardar(req.body)
  if(!validacion.bool) {
    return res.status('400').json(validacion.error);
  }
  next();
}

module.exports = {
  esquemadeValidacionGuardar
}