'use strict';

const { producto } = require('./producto.esquema-mysql');
const constructorError = require('../comunes/error-contructor');
const { sequelize } = require('../configuracion/sequelize');

const MYSQL = 'mysql';

async function guardar(dato) {
  try {
    return await producto.create(dato);
  } catch(error) {
    throw constructorError.constructor(MYSQL, error);
  }
  // sequelize.sync().then(function () {
  //   return producto.create(dato);
  // }).then(function(userDB){
  //   console.log(userDB.get({
  //     plain: true
  //   }));
  // }).catch(error => {
  //   console.log('**********', error);
  //     throw constructorError.constructor(MYSQL, error);
  //   });
  // return true;
}

async function actualizar(id, dato) {
  // try {
  //   const resu = await producto.replaceOne({ _id: id}, dato);
  //   if(resu.ok===1){
  //     return resu;
  //   }
  //   throw constructorError.constructor(MONGOOSE, 
  //     { 
  //       name: 'Actualizar', 
  //       message: 'No se pudo actulizar el elemento'
  //     });
  // } catch(error) {
  //   throw error;
  // }
}

async function eliminar(id) {
  // try {
  //   return await producto.findOneAndDelete({ _id: id });
  // } catch (error) {
  //   throw constructorError.constructor(MONGOOSE, error);
  // }
}

async function obtenerTodo() {
  try {
    //Select * from producto;
    return await producto.findAll();
  } catch (error) {
    throw constructorError.constructor(MYSQL, error);
  }
}

async function obtenerPorId(id) {
  try {
    const res = await producto.findAll({
      where : {
        id
      }
    });
    return res;
  } catch (error) {
    throw constructorError.constructor(MYSQL, 
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