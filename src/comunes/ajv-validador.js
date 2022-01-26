'use strict';

const Ajv = require('ajv');
const ajv = new Ajv();

let ajvEsquemaDeValidacion = (jsonEsquema, ajvEsquema) => {
  let res = {
    bool: true,
    error: []
  };
  const validar = ajv.compile(ajvEsquema);
  res.bool = validar(jsonEsquema);
  if(!res.bool) {
    res.error = validar.errors;
  }
  return res;
}

module.exports = {
  ajvEsquemaDeValidacion
}