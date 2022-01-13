'use strict'

const mongoose = require('mongoose');
const esquema = require('./producto.esquema');

const DOCUMENTO = 'producto';


let producto = mongoose.model(DOCUMENTO, esquema.productoEsquema);

async function guardar(dato) {
  return await producto.create(dato);
}

async function actualizar(id, dato) {
  return await producto.replaceOne({ _id: id}, dato);
}

async function eliminar(id) {
  return await producto.findOneAndDelete({ _id: id });
}

async function obtenerTodo() {
  return await producto.find({});
}

async function obtenerPorId(id) {
  return await producto.findById(id);
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  obtenerPorId,
  obtenerTodo
}