const express = require('express');
const faker = require('faker');
const router = express.Router();

// llamado: http://localhost:3000/products
// este llamado nos a lista 10 porque no le pasamos una query entonces
// limit es 10. Pero si le pasamos una query va a lista lo que le pasemos
// y lo hacemos asi: http://localhost:3000/products?size=5

router.get('/',(req, res)=>{
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let index = 0; index < limit; index ++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products);
});

// Este endpoint es especifico.
// Los endpoints especificos van antes que los dinamicos sino no van a funcionar.

router.get('/filter',(req, res)=>{
  res.send('Yo soy un filter');
})

// llamado: http://localhost:3000/products/12
// Este endpoit es dinamico
router.get('/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'Preduct 2',
    price: 2000,
  })
})

module.exports = router;
