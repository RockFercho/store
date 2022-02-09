'use strict';

const mongoose = require('mongoose');

let Esquema = mongoose.Schema;

let tokenEsquema = new Esquema({
  token: String
}, {
  versionKey: false
});

module.exports = {
  tokenEsquema
}
