const express = require('express');
const PurchaseOrdersServices = require('./../services/purchaseOrdersServices')
const faker = require('faker');
const router = express.Router();
const service = new PurchaseOrdersServices();

// llamado: http://localhost:3000/api/v1/purchaseOrders

router.get('/purchaseOrders',(req, res)=>{
  const purchaseOrders = service.find();
  res.status(200).json(purchaseOrders);
})

// llamado: http://localhost:3000/api/v1/purchaseOrders/12

router.get('/purchaseOrders/:id',(req, res)=>{
  const {id} = req.params;
  const purchaseOrders = service.findOne(id);
  res.status(200).json(purchaseOrders)
});

module.exports = router;
