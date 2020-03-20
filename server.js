
const express = require('express');

const server = express();

server.use('/',(req,res) => {
  res.send('Server Funcionando');
})

server.listen(8000);