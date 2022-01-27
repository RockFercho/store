'use strict';

const mongoose = require('mongoose');

let Esquema = mongoose.Schema;

let usuarioEsquema = new Esquema({
  nombre: String,
  apellido: String,
  contrasena: String
}, {
  versionKey: false
});

module.exports = {
  usuarioEsquema
}