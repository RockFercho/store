'use strict'

const mongoose = require('mongoose');
const esquema = require('./login.esquema');
const constructorError = require('../comunes/error-contructor');

const DOCUMENTO = 'token';
const MONGOOSE = 'mongoose';


let token = mongoose.model(DOCUMENTO, esquema.tokenEsquema);

async function guardar(dato) {
  try {
    return await token.create(dato);
  } catch(error) {
    throw constructorError.constructor(MONGOOSE, error);
  }
}

async function actualizar(id, dato) {
  try {
    const resu = await token.replaceOne({ _id: id}, dato);
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
    return await token.findOneAndDelete({ _id: id });
  } catch (error) {
    throw constructorError.constructor(MONGOOSE, error);
  }
}

async function obtenerTodo() {
  try {
    return await token.find({});
  } catch (error) {
    throw constructorError.constructor(MONGOOSE, error);
  }
}

async function obtenerPorId(id) {
  try {
    const res = await token.findById(id);
    return res;
  } catch (error) {
    throw constructorError.constructor(MONGOOSE, 
      { 
        name: 'Base de Datos - buscar por ID', 
        message: 'No existe el Id en la Base de Datos'
      });
  }
}

async function obtenerToken(token) {
  try {
    return await token.find({ token });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  obtenerPorId,
  obtenerTodo,
  obtenerToken
}