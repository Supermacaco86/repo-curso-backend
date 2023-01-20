const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const  {logErrors, errorHandler, boomErrorHandler} = require('./middleware/errorHandler')
const app = express();
const port = 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080'];
const optios = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin)){
      callback(null, true)
    }else{
      callback(new Error('No permitido.'))
    }
  }
}
app.use(cors(optios));

app.get('/',(req, res)=>{
  res.send('Hola mi server en express.');
});

routerApi(app);

// Los middleware de tipo error deben definirse despues del routing:
// Ademas es impotante el orden en que los agregamos: comportamiento secuencial.
// Deben estar en el orden en que queremos que se ejecuten.
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// llamado: // llamado: http://localhost:3000/
app.listen(port, ()=>{
  console.log('Mi puerto es el ' + port);
});
