"use strict";

const port = 3000;

const express = require('express');
let app = express();

let api = {};

require('./routes/routes')(app, api);

app.listen(port, () => {
  console.log(`Exemplo rodando na porta ${port}!`);
});
