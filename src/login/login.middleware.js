'use strict';
const ajvEsquemaDeValidacion = require('./producto.esquema-validador');
const constructorError = require('../comunes/error-contructor');

function esquemadeValidacionGuardar(req, res, next) {
  let validacion = ajvEsquemaDeValidacion.validadorGuardar(req.body)
  if(!validacion.bool) {
    const error = constructorError.constructor('ajv', validacion.error);
    return res.status(error.status).json(error.body);
  }
  next();
}

module.exports = {
  esquemadeValidacionGuardar
}