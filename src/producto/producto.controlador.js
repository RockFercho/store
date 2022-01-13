'use strict'

const modelo = require('./producto.modelo');

const PRODUCT = [
  { id: 1, nombre: 'coco cola', precio: 13, vencimiento: null },
  { id: 2, nombre: 'fanta', precio: 13, vencimiento: null },
  { id: 3, nombre: 'macarron', precio: 13, vencimiento: null }
];

function getProducto(req, res) {
  // if(req.query.nombre) {
  //   const result = buscar(req.query);
  //   if(result === null) {
  //     return res.status(404).json(result);
  //   }
  //   return res.status(200).json(result);
  // }
  // return res.status(200).json(PRODUCT);
  return res.status(200).json(modelo.retonarTodo());
}
function buscar(dato){
  let save = null;
  PRODUCT.forEach(function (producto) {
    if(producto.nombre == dato.nombre) {
      save = producto;
    }
  });
  
  return save;
}

function buscarId(id){
  let save = null;
  PRODUCT.forEach(function (producto) {
    if(producto.id == id) {
      save = producto;
    }
  });
  
  return save;
}

function getById(req, res) {
  const id = req.params.id;
  const result = buscarId(id);
  if(result === null) {
    return res.status(404).json(result);
  }
  return res.status(200).json(result);
}

function guardarProducto(req, res) {
  const producto_guardar = req.body;
  //const respuesta = modelo.guardar(producto_guardar);
  return res.status(200).json(modelo.guardar(producto_guardar));
}

function actualizar(req, res) {
  const id = req.params.id;
  const datoActualizar = req.body;

  const result = buscarId(id);
  if(result === null) {
    return res.status(404).json("No existe el Elemento en la BD");
  }
  datoActualizar.id = result.id;
  PRODUCT[PRODUCT.indexOf(result)]=datoActualizar;
  return res.status(200).json(datoActualizar);
}

function eliminar(req, res) {
  const id = req.params.id;
  const result = buscarId(id);
  if(result === null) {
    return res.status(404).json("No existe el Elemento en la BD");
  }
  const pos = PRODUCT.indexOf(result);
  try {
    PRODUCT.splice(pos,1);
    return res.status(200).json(true);
  } catch (error) {
    return res.status(400).json(false);
  }
}

module.exports = {
  getProducto,
  guardarProducto,
  getById,
  actualizar,
  eliminar
}