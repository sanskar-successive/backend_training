import jwt from 'jsonwebtoken'

export const authenticate = (req, res, next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message : "token not provided"})
    }
    try{
        const decoded = jwt.verify(token, "123")
        req.newData = decoded;
        next()
    }
    catch(err){
        res.status(401).json({message : "invalid token"})
    }
}
