//fazer a importação do express
const express = require('express')
const router = require('./routes/index')

//Configurações básicas do aplicativo
const app = express();
app.use('/', router); //foi passado apenas uma rota, pois criamos apenas 1

module.exports = app;
