const express = require('express');
const routerApi = require('./routes')
const app = express();
const port = 3000;

routerApi(app);

// llamado: // llamado: http://localhost:3000/

app.get('/',(req, res)=>{
  res.send('Hola mi server en express.');
});


app.listen(port, ()=>{
  console.log('Mi puerto es el ' + port);
});
