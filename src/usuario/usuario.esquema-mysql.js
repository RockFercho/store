'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../configuracion/sequelize');

const usuario = sequelize.define('usuario', {
  nombre: Sequelize.STRING,
  apellido: Sequelize.STRING,
  codigo: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = {
  usuario
}