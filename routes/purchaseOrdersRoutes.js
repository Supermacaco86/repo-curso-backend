const express = require('express');
const PurchaseOrdersServices = require('./../services/purchaseOrdersServices')
const router = express.Router();
const service = new PurchaseOrdersServices();

// llamado: http://localhost:3000/api/v1/purchaseOrders

router.get('/purchaseOrders',(req, res)=>{
  const purchaseOrders = service.find();
  res.status(200).json(purchaseOrders);
})

// Este endpoint es especifico.
// Los endpoints especificos van antes que los dinamicos sino no van a funcionar.

router.get('/filter',(req, res)=>{
  res.status(200).send('Yo soy un filter');
})

// llamado: http://localhost:3000/api/v1/purchaseOrders/12

router.get('/purchaseOrders/:id',(req, res)=>{
  const {id} = req.params;
  const purchaseOrders = service.findOne(id);
  res.status(200).json(purchaseOrders)
});

router.post('/', (req, res)=>{
  const body = req.body;
  const newPurchaseOrder = service.create(body);
  res.status(201).json(newPurchaseOrder);
});

router.patch('/:id', (req, res)=>{
  const {id} = req.params;
  const body = req.body;
  const purchaseOrder = service.update(id, body);
  res.status(200).json(purchaseOrder);
});

router.delete('/:id', (req, res)=>{
  const {id} = req.params;
  const respuesta = service.delete(id)
  res.status(200).json(respuesta);
});


module.exports = router;
