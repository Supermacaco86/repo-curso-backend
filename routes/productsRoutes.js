const express = require('express');
const ProductsService = require('./../services/productServices')
const router = express.Router();
const service = new ProductsService();


// llamado: http://localhost:3000/api/v1/products
// este llamado nos a lista 10 porque no le pasamos una query entonces
// limit es 10. Pero si le pasamos una query va a lista lo que le pasemos
// y lo hacemos asi: http://localhost:3000/api/v1/products?size=5

router.get('/',(req, res)=>{
 const products = service.find();
  res.status(200).json(products);
});

// Este endpoint es especifico.
// Los endpoints especificos van antes que los dinamicos sino no van a funcionar.

router.get('/filter',(req, res)=>{
  res.status(200).send('Yo soy un filter');
})

// llamado: http://localhost:3000/api/v1/products/12
// Este endpoit es dinamico
router.get('/:id', (req, res)=>{
  const {id} = req.params;
  const product = service.findOne(id);
  res.status(200).json(product);
});

router.post('/', (req, res)=>{
  const body = req.body;
  res.status(201).json({
    meassage: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res)=>{
  const {id} = req.params;
  const body = req.body;
  res.status(200).json({
    meassage: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res)=>{
  const {id} = req.params;
  res.status(200).json({
    meassage: 'deleted',
    id,
  });
});

module.exports = router;

