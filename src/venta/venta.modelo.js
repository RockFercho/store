'use strict'

let ventaDB = require('./venta.db-mysql');

function seleccionarBaseDatos (bd) {
  if (bd === 'mongoose') {
    ventaDB = require('./venta.db');
  }
}

function guardar(dato, bd) {
  seleccionarBaseDatos(bd);
  return ventaDB.guardar(dato);
}

function actualizar(id, dato, bd) {
  seleccionarBaseDatos(bd);
  return ventaDB.actualizar(id, dato);
}

function eliminar (id, bd) {
  seleccionarBaseDatos(bd);
  return ventaDB.eliminar(id);
}

function retonarTodo(bd) {
  seleccionarBaseDatos(bd);
  return ventaDB.obtenerTodo();
}

function retornarId(id, bd) {
  seleccionarBaseDatos(bd);
  return ventaDB.obtenerPorId(id);
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  retonarTodo,
  retornarId
}