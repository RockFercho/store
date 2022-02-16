const express = require('express');
const logout = require('../logout/logout.controlador');


const ROUTER = express.Router();

ROUTER
  .post('/',
    logout.eliminarToken
  );

module.exports = ROUTER;