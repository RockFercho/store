'use strict'

const tokenDB = require('./login.db');

function guardar(dato) {
  return tokenDB.guardar(dato);
}

function actualizar(id, dato) {
  return tokenDB.actualizar(id, dato);
}

function eliminar (id) {
  return tokenDB.eliminar(id);
}

function retonarTodo() {
  return tokenDB.obtenerTodo();
}

function retornarId(id) {
  return tokenDB.obtenerPorId(id);
}

function retornarToken(token) {
  return tokenDB.obtenerToken(token);
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  retonarTodo,
  retornarId,
  retornarToken
}