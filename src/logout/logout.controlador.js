'use strict';

const modelLogin = require('../login/login.modelo');
const errorConstructor = require('../comunes/error-contructor');

const NO_TOKEN = 'no token';

async function eliminarToken(req, res) {
  try {
    const token = req.body.token;
    const getToken = await modelLogin.retornarToken(token);
    
    if(getToken.length > 0) {
      await modelLogin.eliminar(getToken[0].id);
      return res.status(200).json(true);
    } else {
      throw errorConstructor.constructor(
        NO_TOKEN,
        {
          name: 'Anauthorized',
          message: 'No existe el token en la base de datos'
        }
      )
    }
  } catch(error) {
    return res.status(error.status).json(error.body);
  }
}

module.exports = {
  eliminarToken
}