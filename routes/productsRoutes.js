const express = require('express');
const ProductsService = require('./../services/productServices')
const router = express.Router();
const service = new ProductsService();


// llamado: http://localhost:3000/api/v1/products
// este llamado nos a lista 10 porque no le pasamos una query entonces
// limit es 10. Pero si le pasamos una query va a lista lo que le pasemos
// y lo hacemos asi: http://localhost:3000/api/v1/products?size=5

router.get('/', async(req, res)=>{
 const products = await service.find();
  res.status(200).json(products);
});

// Este endpoint es especifico.
// Los endpoints especificos van antes que los dinamicos sino no van a funcionar.

router.get('/filter',(req, res)=>{
  res.status(200).send('Yo soy un filter');
});

// llamado: http://localhost:3000/api/v1/products/12
// Este endpoit es dinamico
router.get('/:id', async (req, res, next)=>{
  try {
    const {id} = req.params;
    const product = await service.findOne(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  };
});

router.post('/', async (req, res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res)=>{
  try{
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json(product);
  }catch(error){
    res.status(404).json({
      message: error.message
    });
  };
});

router.delete('/:id', async (req, res)=>{
  const {id} = req.params;
  const respuesta = await service.delete(id)
  res.status(200).json(respuesta);
});

module.exports = router;

