'use strict'

let usuarioDB = require('./usuario.db-mysql');

function seleccionarBaseDatos (bd) {
  if (bd === 'mongoose') {
    productoDB = require('./usuario.db');
  }
}

function guardar(dato, bd) {
  seleccionarBaseDatos(bd)
  return usuarioDB.guardar(dato);
}

function actualizar(id, dato) {
  return usuarioDB.actualizar(id, dato);
}

function eliminar (id) {
  return usuarioDB.eliminar(id);
}

function retonarTodo() {
  return usuarioDB.obtenerTodo();
}

function buscarPorCodigo(codigo) {
  return usuarioDB.buscarPorCodigo(codigo);
}

function retornarId(id) {
  return usuarioDB.obtenerPorId(id);
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  retonarTodo,
  retornarId,
  buscarPorCodigo
}