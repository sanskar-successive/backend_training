import jwt from "jsonwebtoken";
import CreateError from 'http-errors';
import { NextFunction, Request, Response } from "express";

class AuthMiddleware{

    public authenticateUser = (req:Request, res:Response, next:NextFunction):void => {
        try {
          const token : string = req.cookies['authToken'];
          console.log(token);
          if (!token) {
            next(CreateError(403, 'token not provided'));
            // throw new Error();
          } else {
            jwt.verify(token, "12",);
            next();
          }
        } catch (error) {
          next(CreateError(401, 'invalid token'))
          
          // next(error)
          // console.log(error);
          // next(error);
        }
      };
}

export default new AuthMiddleware().authenticateUser;