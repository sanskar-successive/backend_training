const errorHandler = (err, req, res, next) => {
    console.log('error handler chal rha hai');
    return res.json(err);
};
export default errorHandler;
