'use strict'

const productoDB = require('./producto.db');

function guardar(dato) {
  return productoDB.guardar(dato);
}

function actualizar(id, dato) {
  return productoDB.actualizar(id, dato);
}

function eliminar (id) {
  return productoDB.eliminar(id);
}

function retonarTodo() {
  return productoDB.obtenerTodo();
}

function retornarId(id) {
  return productoDB.obtenerPorId(id);
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  retonarTodo,
  retornarId
}