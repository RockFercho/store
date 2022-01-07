'use strict'

const PRODUCT = [
  { nombre: 'coco cola', precio: 13, vencimiento: null },
  { nombre: 'fanta', precio: 13, vencimiento: null },
  { nombre: 'macarron', precio: 13, vencimiento: null }
];

function getProducto(req, res) {
  return res.status(200).json(PRODUCT);
}

function guardarProducto(req, res) {
  let producto_guardar = req.body;
  console.log(req.body);
  PRODUCT.push(producto_guardar);
  return res.status(200).json(PRODUCT);
}

module.exports = {
  getProducto,
  guardarProducto
}