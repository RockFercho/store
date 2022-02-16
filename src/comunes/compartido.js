'use strict';
const jwt = require('jsonwebtoken');
const modelLogin = require('../login/login.modelo');
const { KEY, DATO } = require('../configuracion/global');

function generarToken() {
  let token = jwt.sign(
    { dato: DATO },
    KEY,
    { expiresIn: 60 * 10 }
  );
  return token;
}

async function actualizarToken(token) {
  try {
    const getToken = await modelLogin.retornarToken(token);    const newToken = generarToken();
    await modelLogin.actualizar(
      getToken[0]._id, 
      { token:  newToken }
    );
    return newToken;
  } catch(error) {
    console.log('*******', error)
  }
}

module.exports = {
  actualizarToken,
  generarToken
}