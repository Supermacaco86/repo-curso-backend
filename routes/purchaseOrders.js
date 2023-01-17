const express = require('express');
const faker = require('faker');
const router = express.Router();

// llamado: http://localhost:3000/api/v1/purchaseOrders

router.get('/purchaseOrders',(req, res)=>{
  res.json([
    {
      name: 'purchase order1'
    },
    {
      name: 'purchase order2'
    },
  ])
})

// llamado: http://localhost:3000/api/v1/purchaseOrders/12

router.get('/purchaseOrders/:id',(req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'purchase order'
  })
});

module.exports = router;
