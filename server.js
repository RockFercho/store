const express = require('express');
const app = express();
const port = 8082;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => console.log('servidor esta arriba '+ port));