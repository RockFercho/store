const express = require('express');
const producto = require('../producto/producto.controlador');

const ROUTER = express.Router();

ROUTER
  .get('/', producto.getProducto)
  .get('/:id', producto.getById)
  .put('/:id', producto.actualizar)
  .delete('/:id', producto.eliminar)
  .post('/', producto.guardarProducto);

module.exports = ROUTER;