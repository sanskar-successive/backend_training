import jwt from 'jsonwebtoken'
import createError from "http-errors";

const authenticateUser = (req,res,next)=>{
    const token = req.headers.authorization
    if(!token){
        return next(createError(403, 'forbidden, token not provided'))
    }

    try{
        const decodedUser = jwt.verify(token, "123");
        req.user = decodedUser;
        next();
    }
    catch(err){
        return next(createError(401, 'Unauthorized, invalid token'))
    }
}

export default authenticateUser;