'use strict';

let constructor = (nombreError, error) => {
  let status = null;
  let body = null;

  switch (nombreError) {
    case 'ajv' : 
      status = 400;
      body = {
        name: 'Esquema',
        message: error[0].message
      }
      break;
    case 'mongoose':
      status = 400;
      body = {
        name: `Base de Datos - ${error.name}`,
        message: error.message
      }
      break;
    case 'conflicto':
      status = 409;
      body = {
        name: error.name,
        message: error.error
      }
    break;
    default:
      status = 400;
      body = error.message
    break;
  }
  return {
    body,
    status
  };
}

module.exports = {
  constructor
}