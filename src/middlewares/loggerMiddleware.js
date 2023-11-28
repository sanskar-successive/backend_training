const logEvents = (req, res, next)=>{
    console.log(`${new Date()} <><> method=>${req.method} <><> URL=>${req.url}`);
    next();
}
export default logEvents;