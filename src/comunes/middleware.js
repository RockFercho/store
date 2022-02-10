'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { KEY } = require('../configuracion/global');
const modelLogin = require('../login/login.modelo');
const errorConstructor = require('../comunes/error-contructor');

const SALT_ROUNDS = 12;
const METHOD = ['PUT', 'POST'];
const PASSWORD = 'password';
const NO_TOKEN = 'no token';
const TOKEN_INVALIDO = 'token invalido';

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

async function validarToken(res, request, next) {
  try {
    const token = request.req.query.token;
    jwt.verify(token, KEY);
    const getToken = await modelLogin.retornarToken(token);
    if (getToken.length === 0) {
      throw errorConstructor.constructor(
        NO_TOKEN,
        {
          name: 'unauthorized',
          message: 'El token no existe en la base de datos'
        }
      )
    } 
    next();
  } catch(error) {
    console
    if(error.status) {
      return res.res.status(error.status).json(error.body)
    } else {
      const newError = errorConstructor.constructor(
        TOKEN_INVALIDO,
        {
          name: 'unauthorized',
          message: 'El token enviado no es valido'
        }
      );
      return res.res.status(newError.status).json(newError.body);
    }
  }
}

module.exports = {
  encrypt,
  validarToken
}