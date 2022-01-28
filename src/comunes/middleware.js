'use strict';

const bcrypt = require('bcrypt');

const SALT_ROUNDS = 12;
const METHOD = ['PUT', 'POST'];
const PASSWORD = 'password';

function buscarValor(array, cadena) {
  return array.find( valor => valor === cadena);
}

function encrypt(res, request, next) {
  if (buscarValor(METHOD, request.req.method)) {
    for (const prop in request.req.body) {
      if (prop === PASSWORD) {
        const salt = bcrypt.genSaltSync(SALT_ROUNDS);
        const hash = bcrypt.hashSync(request.req.body[prop], salt);
        request.req.body[prop] = hash;
      }
    }

  }
  next();
}

module.exports = {
  encrypt
}