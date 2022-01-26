const express = require('express');
const producto = require('../producto/producto.controlador');
const middleware = require('../producto/producto.middleware');

const ROUTER = express.Router();

ROUTER
  .get('/', producto.getProducto)
  .get('/:id', producto.getById)
  .put('/:id', producto.actualizar)
  .delete('/:id', producto.eliminar)
  .post('/',
    middleware.esquemadeValidacionGuardar, 
    producto.guardarProducto
  );

module.exports = ROUTER;