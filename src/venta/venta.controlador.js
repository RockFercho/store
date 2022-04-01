'use strict'

const modelo = require('./venta.modelo');
const contructorError = require('../comunes/error-contructor');
const compartido = require('../comunes/compartido');

async function getVenta(req, res) {
  // if(req.query.nombre) {
  //   const result = buscar(req.query);
  //   if(result === null) {
  //     return res.status(404).json(result);
  //   }
  //   return res.status(200).json(result);
  // }
  // return res.status(200).json(PRODUCT);
  return res.status(200).json({
    body: await modelo.retonarTodo(),
    token: await compartido.actualizarToken(req.query.token)
  });
}

async function getById(req, res) {
  try {
    const id = req.params.id;
    const result = await modelo.retornarId(id);
    return res.status(200).json({
      body: result,
      token: await compartido.actualizarToken(req.query.token)
    });
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

async function guardarVenta(req, res) {
  try {
    const venta_guardar = req.body;
    return res.status(200).json({
      body: await modelo.guardar(venta_guardar),
      token: await compartido.actualizarToken(req.query.token)
    });
  } catch(error) {
    return res.status(error.status).json(error.body);
  }
}

async function actualizar(req, res) {
  try {
    const id = req.params.id;
    const datoActualizar = req.body;
  
    await modelo.retornarId(id);
    
    await modelo.actualizar(id, datoActualizar);
    return res.status(200).json({
      body: datoActualizar,
      token: await compartido.actualizarToken(req.query.token)
    });
  } catch (error) {
    return res.status(error.status).json(error.body);
  }
}

async function eliminar(req, res) {
  try {
    const id = req.params.id;
    const result = modelo.retornarId(id);
  
    const resu = await modelo.eliminar(id);
    return res.status(200).json({
      body: resu,
      token: await compartido.actualizarToken(req.query.token)
    });
  } catch (error) {
    return res.status(404).json("No se encontro el elemento");
  }
}

module.exports = {
  getVenta,
  guardarVenta,
  getById,
  actualizar,
  eliminar
}