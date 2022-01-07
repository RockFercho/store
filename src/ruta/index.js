'use strict'
const producto = require('./producto')

function routes(app) {
  app.use('/api/producto', producto);
};

module.exports = routes;