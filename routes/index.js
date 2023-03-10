const express = require('express');

const productsRouter = require('./productsRoutes');
const categoriesRouter = require('./categoriesRoutes');
const purchaseOrdersRouter = require('./purchaseOrdersRoutes');
const usersRouter = require('./usersRoutes');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/purchaseOrders', purchaseOrdersRouter);
  router.use('/users', usersRouter);
};

module.exports = routerApi;
