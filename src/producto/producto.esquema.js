'use strict';

const mongoose = require('mongoose');

let Esquema = mongoose.Schema;

let productoEsquema = new Esquema({
  nombre: String,
  precio: Number,
  vencimiento: {type: Date}
}, {
  versionKey: true
});

module.exports = {
  productoEsquema
}
