'use strict';

const { token } = require('./login.esquema-mysql');
const constructorError = require('../comunes/error-contructor');
const { sequelize } = require('../configuracion/sequelize');

const MYSQL = 'mysql';

async function guardar(dato) {
  try {
    return await token.create(dato);
  } catch(error) {
    if(error.parent.code === 'ER_NO_SUCH_TABLE') {
      console.log("-----------*****************------------");
      return sequelize.sync().then(function () {
          return token.create(dato);
        });
    }
    throw constructorError.constructor(MYSQL, error);
  }
}

async function actualizar(id, dato) {
  try {
    return await token.update( dato , {
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
    return await token.destroy({
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
    return await token.findAll();
  } catch (error) {
    throw constructorError.constructor(MYSQL, error);
  }
}

async function obtenerPorId(id) {
  try {
    const res = await token.findAll({
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

async function obtenerToken(tokenn) {
  try {
    const res = await token.findAll({
      where : {
        token: tokenn
      }
    });
    return res;
  } catch (error) {
    throw constructorError.constructor(MYSQL, 
      { 
        name: 'Base de Datos - buscar por Token', 
        message: 'No existe el token en la Base de Datos'
   
      });
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