const express = require('express');
const routerApi = require('./routes')
const  {logErrors, errorHandler} = require('./middleware/errorHandler')
const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req, res)=>{
  res.send('Hola mi server en express.');
});

routerApi(app);

// Los middleware de tipo error deben definirse despues del routing:
// Ademas es impotante el orden en que los agregamos: comportamiento secuencial.
// Deben estar en el orden en que queremos que se ejecuten.
app.use(logErrors);
app.use(errorHandler);

// llamado: // llamado: http://localhost:3000/
app.listen(port, ()=>{
  console.log('Mi puerto es el ' + port);
});
