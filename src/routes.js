const express = require('express');
const routes = express.Router();

routes.use('/', (req,res) => {
    res.send('Servidor Funcionando');
})

module.exports = routes;