// Los middleware de tipo error deben tener siempre los cuatro parametros
// (err, req, res, next)


// Este middleware captura el error y lo muestra pot consola y con el next
// sigue al segundo middleware:
function logErrors(err, req, res, next){
  console.error(err);
  next(err);
};

// Este middleware recibe el anterior y arroja un mensaje:
function errorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = {logErrors, errorHandler};
