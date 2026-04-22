const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor HTTPS para informe');
});

module.exports = app;