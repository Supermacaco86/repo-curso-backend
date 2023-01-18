const express = require('express');
const CategoriesServices = require('./../services/categoriesServices')
const faker = require('faker');
const router = express.Router();
const service = new CategoriesServices();



// llamado: http://localhost:3000/api/v1/categories
// este llamado nos a lista 10 porque no le pasamos una query entonces
// limit es 10. Pero si le pasamos una query va a lista lo que le pasemos
// y lo hacemos asi: http://localhost:3000/api/v1/categories?size=5

router.get('/',(req, res)=>{
  const categories = service.find();
  res.status(200).json(categories);
});

// Este endpoint es especifico.
// Los endpoints especificos van antes que los dinamicos sino no van a funcionar.

router.get('/filter',(req, res)=>{
  res.send('Yo soy un filter');
})

// llamado: http://localhost:3000/api/v1/categories/12
// Este endpoit es dinamico
router.get('/:id', (req, res)=>{
  const {id} = req.params;
  const categories = service.findOne(id);
  res.status(200).json(categories);
})

// Endpoint con dos parametros dinamicos en la url:
// Llamado: http://localhost:3000/api/v1/categories/12/products/12

router.get('/:categoryId/products/:productId', (req, res)=>{
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  })
})

module.exports = router;
