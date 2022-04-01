'use strict';

const { venta } = require('./venta.esquema-mysql');
const constructorError = require('../comunes/error-contructor');
const { sequelize } = require('../configuracion/sequelize');

const MYSQL = 'mysql';

async function guardar(dato) {
  try {
    return await venta.create(dato);
  } catch(error) {
    if(error.parent.code === 'ER_NO_SUCH_TABLE') {
      sequelize.sync().then(function () {
          return venta.create(dato);
        }).then(function(userDB){
          console.log(userDB.get({
            plain: true
          }));
        }).catch(error => {
          console.log('**********', error);
            throw constructorError.constructor(MYSQL, error);
          });
    }
    throw constructorError.constructor(MYSQL, error);
  
  }
}



async function actualizar(id, dato) {
  try {
    return await venta.update( dato , {
      where: {
        id
      }
    });
  } catch(error) {
    throw error;
  }
}

async function eliminar(id) {
  try {
    return await venta.destroy({
      where: {
        id 
      }
    });
  } catch (error) {
    throw constructorError.constructor(MYSQL, error);
  }
}

async function obtenerTodo() {
  try {
    //Select * from producto;
    return await venta.findAll();
  } catch (error) {
    throw constructorError.constructor(MYSQL, error);
  }
}

async function obtenerPorId(id) {
  try {
    const res = await venta.findAll({
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

async function obtenerPorNombre(nombre) {
  try {
    const res = await venta.findAll({
      where : {
        nombre
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
  obtenerTodo,
  obtenerPorNombre
}