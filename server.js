
const express = require('express');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb://localhost:27017/products',{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if(err){
    console.log('Erro em concetar ao DB');
  }console.log('Conseguiu se conectar!');
});

server.use('/',(req,res) => {
  res.send('Server Funcionando');
})

const port = 3000;
server.listen(port,(err) => {
  if(err){
  return console.log('Não foi possivel acessar o servidor!');
  }console.log('Conectado em Https://localhost:8000');
});