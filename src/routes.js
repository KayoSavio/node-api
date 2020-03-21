const express = require('express');
const routes = express.Router();
const products = require('./controller/productController');

routes.get("/products", products.all);
routes.get("/products/:id", products.show);
routes.post("/products", products.store);
routes.put("/products/:id", products.update);
routes.delete("/products/:id", products.destroy);

module.exports = routes;