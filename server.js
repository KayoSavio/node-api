const express = require('express');
const mongoose = require('mongoose');
require('./src/model/products');

const app = express();

mongoose.connect('mongodb://localhost:27017/products',
{ useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
  if (err){
    console.log(err);
  } console.log('Conectado ao DataBase');
});

const product = mongoose.model('Product');

app.use('/', (req,res) => {
    product.create({name:"Kayo",old:23});
    res.send('Servidor Funcionando');
})

const port= 3001;
app.listen(port,(err) => {
  if(err){
      return console.log(err);
  }else{console.log(`Conectado em https://localhost:${port}`)};
});