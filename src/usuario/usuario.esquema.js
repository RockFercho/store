'use strict';

const mongoose = require('mongoose');

let Esquema = mongoose.Schema;

let usuarioEsquema = new Esquema({
  nombre: String,
  apellido: String,
  codigo: String,
  password: String
}, {
  versionKey: false
});

module.exports = {
  usuarioEsquema
}