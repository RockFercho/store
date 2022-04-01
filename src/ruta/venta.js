const express = require('express');
const venta = require('../venta/venta.controlador');
const middleware = require('../venta/venta.middleware');

const ROUTER = express.Router();

ROUTER
  .get('/', venta.getVenta)
  .get('/:id', venta.getById)
  .put('/:id', venta.actualizar)
  .delete('/:id', venta.eliminar)
  .post('/',
    //middleware.esquemadeValidacionGuardar, 
    venta.guardarVenta
  );

module.exports = ROUTER;