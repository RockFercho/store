const express = require('express');
const app = express();
const cors = require('cors');
const bd = require('./configuracion/mongodb');
const dbMysql = require('./configuracion/sequelize')
const port = process.env.PORT || 8082;

bd.conectar();
dbMysql.connect();

app.use(cors());
app.use(express.json());
require('./ruta/index.js')(app);

app.listen(port, () => 
  console.log('servidor esta arriba '+ port)
);