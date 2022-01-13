'use strict';

const mongoose = require('mongoose');

async function conectar() {
  await mongoose.connect('mongodb://localhost:27017/tienda' , { useUnifiedTopology: true, useNewUrlParser: true });
  ;console.log('Base de datos conectada ....')
}

module.exports = {
  conectar
};
