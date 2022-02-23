'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../configuracion/sequelize');

const producto = sequelize.define('producto', {
  nombre: Sequelize.STRING,
  precio: Sequelize.INTEGER,
  vencimiento: Sequelize.DATE
});

module.exports = {
  producto
}