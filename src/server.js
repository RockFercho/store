const express = require('express');
const app = express();
const port = 8082;

app.use(express.json());
require('./ruta/index.js')(app);

app.listen(port, () => 
  console.log('servidor esta arriba '+ port)
);