'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../configuracion/sequelize');
const { producto } = require('../producto/producto.esquema-mysql')
const { usuario } = require('../usuario/usuario.esquema-mysql')

const venta = sequelize.define('venta', {
  nombre: Sequelize.STRING,
  nit: Sequelize.STRING
});

venta.productos = venta.hasMany(producto);
venta.usuario = venta.belongsToMany(usuario, { through: 'ventaUsuario' }); //====> usuario.ventas = usuario.hasMany(ventas)

module.exports = {
  venta
}