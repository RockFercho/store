'use strict'

const mongoose = require('mongoose');
const esquema = require('./venta.esquema');
const constructorError = require('../comunes/error-contructor');

const DOCUMENTO = 'venta';
const MONGOOSE = 'mongoose';


let venta = mongoose.model(DOCUMENTO, esquema.ventaEsquema);

async function guardar(dato) {
  try {
    return await venta.create(dato);
  } catch(error) {
    throw constructorError.constructor(MONGOOSE, error);
  }
}

async function actualizar(id, dato) {
  try {
    const resu = await venta.replaceOne({ _id: id}, dato);
    if(resu.ok===1){
      return resu;
    }
    throw constructorError.constructor(MONGOOSE, 
      { 
        name: 'Actualizar', 
        message: 'No se pudo actulizar el elemento'
      });
  } catch(error) {
    throw error;
  }
}

async function eliminar(id) {
  try {
    return await venta.findOneAndDelete({ _id: id });
  } catch (error) {
    throw constructorError.constructor(MONGOOSE, error);
  }
}

async function obtenerTodo() {
  try {
    return await venta.find({});
  } catch (error) {
    throw constructorError.constructor(MONGOOSE, error);
  }
}

async function obtenerPorId(id) {
  try {
    const res = await venta.findById(id);
    return res;
  } catch (error) {
    throw constructorError.constructor(MONGOOSE, 
      { 
        name: 'Base de Datos - buscar por ID', 
        message: 'No existe el Id en la Base de Datos'
      });
  }
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  obtenerPorId,
  obtenerTodo
}