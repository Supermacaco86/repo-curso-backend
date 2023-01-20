const express = require('express');
const UsersServices = require('./../services/usersServices');
const validatorHandler = require('./../middleware/validatorHandler');
const {createUserSchema, updateUserSchema, getUserSchema} = require('./../schemas/userSchema');
const router = express.Router();
const service = new UsersServices();

// Endpoint con query:
// llamado: http://localhost:3000/users?limit=10&offset=12

router.get('/', async(req, res)=>{
  const users = await service.find();
  res.status(200).send(users);
});

// Este endpoint es especifico.
// Los endpoints especificos van antes que los dinamicos sino no van a funcionar.

router.get('/filter',(req, res)=>{
  res.status(200).send('Yo soy un filter');
});

// llamado: http://localhost:3000/api/v1/users/12
// Este endpoit es dinamico

router.get('/:id',
validatorHandler(getUserSchema, 'params'),
  async (req, res)=>{
    try {
      const {id} = req.params;
      const users = await service.findOne();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    };
  }
);

router.post('/',
validatorHandler(createUserSchema, 'body'),
  async (req, res)=>{
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  }
);

router.patch('/:id',
validatorHandler(getUserSchema, 'params'),
validatorHandler(updateUserSchema, 'body'),
  async (req, res)=>{
    try {
      const {id} = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.status(200).json(user);
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
