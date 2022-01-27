'use strict'

const mongoose = require('mongoose');
const esquema = require('./usuario.esquema');

const DOCUMENTO = 'usuario';


let usuario = mongoose.model(DOCUMENTO, esquema.usuarioEsquema);

async function guardar(dato) {
  return await usuario.create(dato);
}

async function actualizar(id, dato) {
  return await usuario.replaceOne({ _id: id}, dato);
}

async function eliminar(id) {
  return await usuario.findOneAndDelete({ _id: id });
}

async function obtenerTodo() {
  return await usuario.find({});
}

async function obtenerPorId(id) {
  return await usuario.findById(id);
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  obtenerPorId,
  obtenerTodo
}