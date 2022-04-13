'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../configuracion/sequelize');
const { producto } = require('../producto/producto.esquema-mysql')
const { usuario } = require('../usuario/usuario.esquema-mysql')

const venta = sequelize.define('venta', {
  nombre: Sequelize.STRING,
  nit: Sequelize.STRING
});

//--------- Usuario ---> Venta
usuario.hasMany(venta);
venta.belongsTo(usuario, { foreingKey: 'usuarioId' });


//--------- Producto ---> Venta
producto.hasMany(venta);
venta.belongsTo(producto, { foreingKey: 'productoId' });

module.exports = {
  venta
}