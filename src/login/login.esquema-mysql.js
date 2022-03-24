'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('../configuracion/sequelize');

const token = sequelize.define('token', {
  token: Sequelize.STRING
});

module.exports = {
  token
}