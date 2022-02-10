'use strinct';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const modelUsario = require('../usuario/usuario.modelo');
const model = require('./login.modelo');

const { KEY, DATO } = require('../configuracion/global');

async function iniciaSecion(req, res) {
  try {
    const codigo = req.body.codigo;
    const password = req.body.password;
    
    const resultado = await modelUsario.buscarPorCodigo(codigo);

    if(resultado.length > 0) {
      const r = await bcrypt.compareSync(password, resultado[0].password);
      if (r) {
        let token = jwt.sign(
          { dato: DATO },
          KEY
        );
        await model.guardar({ token });
        return res.status(200).json(token);
      }
      else 
      return res.status(404).json('La contrasena es incorrecta');
    } else {

      return res.status(404).json('No existe un usuario');
    }

  } catch (error) {
    if(error.body) {
      return res.status(error.status).json(error.body);
    }
    console.log('error*** ', error);
    return res.status(400).json(error);
  }



}

module.exports = {
  iniciaSecion
}