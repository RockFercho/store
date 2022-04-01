'use strict';

const mongoose = require('mongoose');

let Esquema = mongoose.Schema;

let ventaEsquema = new Esquema({
  nombre: String,
  precio: Number,
  vencimiento: {type: Date}
}, {
  versionKey: false
});

module.exports = {
  ventaEsquema
}
