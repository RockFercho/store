const express = require('express');
const producto = require('../producto/producto.controlador');

const ROUTER = express.Router();

ROUTER
  .get('/', producto.getProducto)
  .post('/', producto.guardarProducto);

module.exports = ROUTER;