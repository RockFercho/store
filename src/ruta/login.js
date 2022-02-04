const express = require('express');
const login = require('../login/login.controlador');
const middleware = require('../producto/producto.middleware');

const ROUTER = express.Router();

ROUTER
  .post('/',
    login.iniciaSecion
  );

module.exports = ROUTER;