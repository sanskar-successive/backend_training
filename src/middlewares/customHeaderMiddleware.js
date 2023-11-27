export const customHeader = (custom_header) =>{
    return (req, res, next)=>{
        res.set(custom_header);
        next();
    }
}