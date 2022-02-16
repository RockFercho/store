'use strict'

const modelo = require('./usuario.modelo');

async function getUsuario(req, res) {
  
  return res.status(200).json(await modelo.retonarTodo());
}

async function getById(req, res) {
  try {
    const id = req.params.id;
    const result = await modelo.retornarId(id);
    console.log('result ----->', result);
    if(result === null) {
      return res.status(404).json(result);
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log('errorrrrrr6666', error);
    return res.status(404).json('Nose encontro ningun resultado para el id usuario');
  }
}

async function guardarUsuario(req, res) {
  const usuario_guardar = req.body;
  //const respuesta = modelo.guardar(producto_guardar);
  return res.status(200).json(await modelo.guardar(usuario_guardar));
}

async function actualizar(req, res) {
  try {
    const id = req.params.id;
    const datoActualizar = req.body;
  
    const result = modelo.retornarId(id);
    if(result === null) {
      return res.status(404).json("No existe el Elemento en la BD");
    }
    const resu =  await modelo.actualizar(id, datoActualizar);
    if(resu.ok===1){
      return res.status(200).json(datoActualizar);
    }
    return res.status(400).json("No se actualizo el producto");
  } catch (error) {
    return res.status(404).json('No se encontro ningun documento con el Id');
  }
}

async function eliminar(req, res) {
  try {
    const id = req.params.id;
    const result = modelo.retornarId(id);
  
    const resu = await modelo.eliminar(id);
    return res.status(200).json(resu);
  } catch (error) {
    return res.status(404).json("No se encontro el elemento");
  }
}

module.exports = {
  getUsuario,
  guardarUsuario,
  getById,
  actualizar,
  eliminar
}