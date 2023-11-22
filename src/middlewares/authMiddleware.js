import jwt from 'jsonwebtoken'

const authenticateUser = (req,res,next)=>{
    const token = req.headers.authorization
    if(!token) return res.json({error : "token not provided"})
    try{
        const decodedUser = jwt.verify(token, "123");
        req.user = decodedUser;
        next();
    }
    catch(err){
        return res.status(401).json({error : "invalid token"})
    }
}

export default authenticateUser;