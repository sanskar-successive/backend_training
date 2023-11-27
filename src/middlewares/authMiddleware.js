import jwt from "jsonwebtoken";
import CustomError from "../utils/errorClass.js";

export const authenticateUser = (req, res, next) => {
  let flag=0;
  try {
    const token = req.headers.authorization;
    if(!token){
        flag=1;
        throw new CustomError("token not provided", 403)
    }
    const decodedUser = jwt.verify(token, "123");
    req.user = decodedUser;
    next();
  } catch (err) {
    if(flag===0) err = new CustomError('invalid token', 401)
    next(err);
  }
};
