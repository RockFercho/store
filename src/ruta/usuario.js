const express = require('express');
const usuario = require('../usuario/usuario.controlador');

const ROUTER = express.Router();

ROUTER
  .get('/', usuario.getUsuario)
  .get('/:id', usuario.getById)
  .put('/:id', usuario.actualizar)
  .delete('/:id', usuario.eliminar)
  .post('/', usuario.guardarUsuario);

module.exports = ROUTER;