const express = require('express');
const UsersServices = require('./../services/usersServices')
const router = express.Router();
const service = new UsersServices();

// Endpoint con query:
// llamado: http://localhost:3000/users?limit=10&offset=12

router.get('/',(req, res)=>{
  const users = service.find();
  res.status(200).send(users);

});

// Este endpoint es especifico.
// Los endpoints especificos van antes que los dinamicos sino no van a funcionar.

router.get('/filter',(req, res)=>{
  res.status(200).send('Yo soy un filter');
});

// llamado: http://localhost:3000/api/v1/users/12
// Este endpoit es dinamico

router.get('/:id',(req, res)=>{
  const {id} = req.params;
  const users = service.findOne();
  res.status(200).send(users);
});

router.post('/', (req, res)=>{
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

router.patch('/:id', (req, res)=>{
  const {id} = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.status(200).json(user);
});

router.delete('/:id', (req, res)=>{
  const {id} = req.params;
  const respuesta = service.delete(id)
  res.status(200).json(respuesta);
});


module.exports = router;
