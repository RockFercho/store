'use strict'

const { usuario } = require('./usuario.esquema-mysql');
const constructorError = require('../comunes/error-contructor');
const { sequelize } = require('../configuracion/sequelize');

const MYSQL = 'mysql';

async function guardar(dato) {
  try {
    return await usuario.create(dato);
  } catch(error) {
    console.log('*******error create', error);
    console.log('*******error key', error.parent.code);
    if(error.parent.code === 'ER_NO_SUCH_TABLE') {
      console.log("-----------*****************------------");
      return sequelize.sync().then(function () {
          return usuario.create(dato);
        });
    }
      throw error;
  }
}

async function actualizar(id, dato) {
  return await usuario.replaceOne({ _id: id}, dato);
}

async function eliminar(id) {
  return await usuario.findOneAndDelete({ _id: id });
}

async function obtenerTodo() {
  
  return await usuario.findAll();
}

async function obtenerPorId(id) {
  return await usuario.findById(id);
}

async function buscarPorCodigo(codigo) {
  try {
    return await usuario.find( { codigo: codigo } );
  } catch (error) {
    throw constructorError.constructor(MONGOOSE, error);
  }
}

module.exports = {
  guardar,
  actualizar,
  eliminar,
  obtenerPorId,
  obtenerTodo,
  buscarPorCodigo
}

// 'use strict';

// const { producto } = require('./producto.esquema-mysql');
// const constructorError = require('../comunes/error-contructor');
// const { sequelize } = require('../configuracion/sequelize');

// const MYSQL = 'mysql';

// async function guardar(dato) {
//   try {
//     return await producto.create(dato);
//   } catch(error) {
//     // if(error.message === 'no existe la tabla') {
//     //   sequelize.sync().then(function () {
//     //       return producto.create(dato);
//     //     }).then(function(userDB){
//     //       console.log(userDB.get({
//     //         plain: true
//     //       }));
//     //     }).catch(error => {
//     //       console.log('**********', error);
//     //         throw constructorError.constructor(MYSQL, error);
//     //       });
//     // }
//     throw constructorError.constructor(MYSQL, error);
//   }
// }

// async function actualizar(id, dato) {
//   try {
//     return await producto.update( dato , {
//       where: {
//         id
//       }
//     });
//   } catch(error) {
//     throw error;
//   }
// }

// async function eliminar(id) {
//   try {
//     return await producto.destroy({
//       where: {
//         id 
//       }
//     });
//   } catch (error) {
//     throw constructorError.constructor(MYSQL, error);
//   }
// }

// async function obtenerTodo() {
//   try {
//     //Select * from producto;
//     return await producto.findAll();
//   } catch (error) {
//     throw constructorError.constructor(MYSQL, error);
//   }
// }

// async function obtenerPorId(id) {
//   try {
//     const res = await producto.findAll({
//       where : {
//         id
//       }
//     });
//     return res;
//   } catch (error) {
//     throw constructorError.constructor(MYSQL, 
//       { 
//         name: 'Base de Datos - buscar por ID', 
//         message: 'No existe el Id en la Base de Datos'
//       });
//   }
// }

// async function obtenerPorNombre(nombre) {
//   try {
//     const res = await producto.findAll({
//       where : {
//         nombre
//       }
//     });
//     return res;
//   } catch (error) {
//     throw constructorError.constructor(MYSQL, 
//       { 
//         name: 'Base de Datos - buscar por ID', 
//         message: 'No existe el Id en la Base de Datos'
//       });
//   }
// }

// module.exports = {
//   guardar,
//   actualizar,
//   eliminar,
//   obtenerPorId,
//   obtenerTodo,
//   obtenerPorNombre
// }