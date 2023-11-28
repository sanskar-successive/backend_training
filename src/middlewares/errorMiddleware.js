const errorHandler = (err, req, res, next) => {
  console.log('error handler chal rha hai');
  return res.status(err.statusCode).json({error : err.message});
};
export default errorHandler;