const express = require('express');
const faker = require('faker');
const router = express.Router();
const service = new UsersServices();

// llamado: http://localhost:3000/api/v1/users/12

router.get('/:id',(req, res)=>{
  const {id} = req.params;
  const users = service.findOne();
  res.status(200).send(users);
})

// Endpoint con query:
// llamado: http://localhost:3000/users?limit=10&offset=12

router.get('/',(req, res)=>{
  const users = service.find();
  res.status(200).send(users);

})

module.exports = router;
