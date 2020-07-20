var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>--- Pruebas de rendimiento v1.0</h1><p>Hola mundo</p><p>v1.0.1</p>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

