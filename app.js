var express = require('express');
var app = express();

app.get('/', function (req, res) {
  setTimeout(() => {
    res.send('<h1>Pruebas de rendimiento v1.0</h1><p>Sistemas distribuidos</p><p>v1.0.1</p>');
  }, Math.floor(Math.random() * 10000));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
