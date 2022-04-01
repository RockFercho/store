'use strict'
const producto = require('./producto');
const usuario = require('./usuario');
const login = require('./login');
const logout = require('./logout');
const venta = require('./venta');
const middleware = require('../comunes/middleware');

function routes(app) {
  app.use('/api/producto', 
    middleware.validarToken, 
    producto);
  app.use('/api/usuario', 
    middleware.validarToken, 
    usuario);
  app.use('/api/venta', 
  //middleware.validarToken, 
  venta);
  app.use('/api/login', login);
  app.use('/api/logout', logout);
};

module.exports = routes;