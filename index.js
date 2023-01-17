const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
  res.send('Hola mi server en express.');
});

app.get('/nueva-ruta',(req, res)=>{
  res.send('Hola soy una nueva ruta.');
});

app.get('/products',(req, res)=>{
  res.json([
    {
    name: 'Product 1',
    price: 1000,
  },
  {
    name: 'Product 2',
    price: 2000,
  }
]);
});

app.get('/products/:id', (req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'Preduct 2',
    price: 2000,
  })
})

// Endpoint con dos parametros dinamicos en la url:
app.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  })
})

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

app.get('/purchaseOrders/:id',(req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'purchase order'
  })
})

app.get('/users',(req, res)=>{
  res.json([
    {
    name: 'user1'
  },
  {
    name: 'user2'
  },
])
})

app.get('/users/:id',(req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'user'
  })
})

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

app.get('/people/:id',(req, res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'person'
  })
})


app.listen(port, ()=>{
  console.log('Mi port ' + port);
});
