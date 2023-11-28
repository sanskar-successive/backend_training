const errorHandler = (err, req, res, next) => {
  console.log('error handler chal rha hai');
  console.log(err.message)
  console.log(err.statusCode)
  return res.status(err.statusCode).json({error : err.message});
};

export default errorHandler;