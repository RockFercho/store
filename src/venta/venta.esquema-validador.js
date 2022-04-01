'use struct';

const ajvValidador = require('../comunes/ajv-validador');

const propiedades = {
  nombre: {
    'type': 'string',
    'minlength': 2,
    'maxlength': 100
  },
  precio: {
    'type': 'number'
  }
};

const requeridoGuardar = ['nombre', 'precio'];

const esquemaGuardar = {
  'additionalProperties' : true,
  properties: propiedades,
  required: requeridoGuardar
};

let validadorGuardar = jsonEsquema => ajvValidador.ajvEsquemaDeValidacion(jsonEsquema, esquemaGuardar);

module.exports = {
  validadorGuardar
}