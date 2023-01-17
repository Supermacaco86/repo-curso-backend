const productsRouter = require('./products');
const categoriesRouter = require('./categories');
const purchaseOrdersRouter = require('./purchaseOrders');
const usersRouter = require('./users');

function routerApi(app){
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/purchaseOrders', purchaseOrdersRouter);
  app.use('/users', usersRouter);
};

module.exports = routerApi;
