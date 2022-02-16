const express = require('express');
const app = express();
const bd = require('./configuracion/mongodb');
const port = 8082;

bd.conectar();

app.use(express.json());
require('./ruta/index.js')(app);

app.listen(port, () => 
  console.log('servidor esta arriba '+ port)
);