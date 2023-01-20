const express = require('express');
const PurchaseOrdersServices = require('./../services/purchaseOrdersServices');
const validatorHandler = require('./../middleware/validatorHandler');
const {createPurchaseOrdersSchema, updatePurchaseOrdersSchema, getPurchaseOrdersSchema} = require('./../schemas/purchaseOrdersSchemas');
const router = express.Router();
const service = new PurchaseOrdersServices();

// llamado: http://localhost:3000/api/v1/purchaseOrders

router.get('/purchaseOrders', async(req, res)=>{
  const purchaseOrders = await service.find();
  res.status(200).json(purchaseOrders);
});

// Este endpoint es especifico.
// Los endpoints especificos van antes que los dinamicos sino no van a funcionar.

router.get('/filter',(req, res)=>{
  res.status(200).send('Yo soy un filter');
});

// llamado: http://localhost:3000/api/v1/purchaseOrders/12

router.get('/purchaseOrders/:id',
validatorHandler(getPurchaseOrdersSchema, 'params'),
  async(req, res)=>{
    try {
      const {id} = req.params;
      const purchaseOrders = await service.findOne(id);
      res.status(200).json(purchaseOrders)
    } catch (error) {
      next(error);
    };
  }
);

router.post('/',
validatorHandler(createPurchaseOrdersSchema, 'body'),
  async (req, res)=>{
    const body = req.body;
    const newPurchaseOrder = await service.create(body);
    res.status(201).json(newPurchaseOrder);
  }
);

router.patch('/:id',
validatorHandler(getPurchaseOrdersSchema, 'params'),
validatorHandler(updatePurchaseOrdersSchema, 'body'),
  async (req, res)=>{
    try {
      const {id} = req.params;
      const body = req.body;
      const purchaseOrder = await service.update(id, body);
      res.status(200).json(purchaseOrder);
    } catch (error) {
      next(error);
    };
  }
);

router.delete('/:id', async (req, res)=>{
  const {id} = req.params;
  const respuesta = await service.delete(id)
  res.status(200).json(respuesta);
});


module.exports = router;
