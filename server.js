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

app.use('/api', require('./src/routes'));

const port= 3001;
app.listen(port,(err) => {
    console.clear();
    if(err){
      return console.log(err);
  }else{console.log(`Conectado em https://localhost:${port}`)};
});