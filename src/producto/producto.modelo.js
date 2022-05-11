'use strict'

let productoDB = require('./producto.db-mysql');

function seleccionarBaseDatos (bd) {
  if (bd === 'mongoose') {
    productoDB = require('./producto.db');
  }
}

function guardar(dato, bd) {
  seleccionarBaseDatos(bd);
  return productoDB.guardar(dato);
}

function actualizar(id, dato, bd) {
  seleccionarBaseDatos(bd);
  return productoDB.actualizar(id, dato);
}

function eliminar (id, bd) {
  seleccionarBaseDatos(bd);
  return productoDB.eliminar(id);
}

function retonarTodo(bd) {
  seleccionarBaseDatos(bd);
  return productoDB.obtenerTodo();
}

function retornarId(id, bd) {
  seleccionarBaseDatos(bd);
  return productoDB.obtenerPorId(id);
}

function retornarPorNombre(nombre, bd) {
  seleccionarBaseDatos(bd);
  return productoDB.obtenerPorNombre(nombre);
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  retonarTodo,
  retornarId,
  retornarPorNombre
}
