const express = require('express');
const faker = require('faker');
const router = express.Router();

// llamado: http://localhost:3000/users/12

router.get('/:id',(req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'user'
  })
})

// Endpoint con query:
// llamado: http://localhost:3000/users?limit=10&offset=12

router.get('/',(req, res)=>{
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset,
    })
  }else{
    res.send('No hay parametros.')
  }
})

module.exports = router;
