const errorHandler = (err, req, res, next) => {
    console.log("error handler chal rha hai");
    return res.status(err.status || 500).json({ error: err.message || "internal server error" });
};
export default errorHandler;
