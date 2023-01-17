const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

// llamado: // llamado: http://localhost:3000/

app.get('/',(req, res)=>{
  res.send('Hola mi server en express.');
});

// llamado: // llamado: http://localhost:3000/nueva-ruta

app.get('/nueva-ruta',(req, res)=>{
  res.send('Hola soy una nueva ruta.');
});

// llamado: http://localhost:3000/products
// este llamado nos a lista 10 porque no le pasamos una query entonces
// limit es 10. Pero si le pasamos una query va a lista lo que le pasemos
// y lo hacemos asi: http://localhost:3000/products?size=5

app.get('/products',(req, res)=>{
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let index = 0; index < limit; index ++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products);
});

// Este endpoint es especifico.
// Los endpoints especificos van antes que los dinamicos sino no van a funcionar.

app.get('/products/filter',(req, res)=>{
  res.send('Yo soy un filter');
})

// llamado: http://localhost:3000/products/12
// Este endpoit es dinamico
app.get('/products/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'Preduct 2',
    price: 2000,
  })
})

// Endpoint con dos parametros dinamicos en la url:
// Llamado: http://localhost:3000/categories/12/products/12

app.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  })
})

// llamado: http://localhost:3000/purchaseOrders

app.get('/purchaseOrders',(req, res)=>{
  res.json([
    {
      name: 'purchase order1'
    },
    {
      name: 'purchase order2'
    },
  ])
})

// llamado: http://localhost:3000/purchaseOrders/12

app.get('/purchaseOrders/:id',(req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'purchase order'
  })
})

// llamado: http://localhost:3000/users/12

app.get('/users/:id',(req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'user'
  })
})

// Endpoint con query:
// llamado: http://localhost:3000/users?limit=10&offset=12

app.get('/users',(req, res)=>{
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

// llamado: http://localhost:3000/people

app.get('/people',(req, res)=>{
  res.json([
    {
    name: 'person1'
  },
  {
    name: 'person2'
  },
])
})

// llamado: http://localhost:3000/people/12

app.get('/people/:id',(req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'person'
  })
})


app.listen(port, ()=>{
  console.log('Mi puerto es el ' + port);
});
