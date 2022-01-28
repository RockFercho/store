'use strict'
const producto = require('./producto');
const usuario = require('./usuario');
const login = require('./login');
const logout = require('./logout');

function routes(app) {
  app.use('/api/producto', producto);
  app.use('/api/usuario', usuario);
  app.use('/api/login', login);
  app.use('/api/logout', logout);
};

module.exports = routes;