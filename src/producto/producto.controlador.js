'use strict'

const PRODUCT = [
  { id: 1, nombre: 'coco cola', precio: 13, vencimiento: null },
  { id: 2, nombre: 'fanta', precio: 13, vencimiento: null },
  { id: 3, nombre: 'macarron', precio: 13, vencimiento: null }
];

function getProducto(req, res) {
  if(req.query.nombre) {
    const result = buscar(req.query);
    if(result === null) {
      return res.status(404).json(result);
    }
    return res.status(200).json(result);
  }
  return res.status(200).json(PRODUCT);
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
  let producto_guardar = req.body;
  console.log(req.body);
  PRODUCT.push(producto_guardar);
  return res.status(200).json(producto_guardar);
}

function actualizar(req, res) {
  const id = req.params.id;
  const datoActualizar = req.body;

  const result = buscarId(id);
  if(result === null) {
    return res.status(404).json(result);
  }
  return res.status(200).json(result);
}

function eliminar(req, res) {
  //tu logica
}

module.exports = {
  getProducto,
  guardarProducto,
  getById,
  actualizar,
  eliminar
}