import jwt from "jsonwebtoken";
import CreateError from 'http-errors';
import { NextFunction, Request, Response } from "express";

class AuthMiddleware{

    public authenticateUser = (req:Request, res:Response, next:NextFunction):void => {
        try {
          const token : string = req.cookies['authToken'];
          console.log(token);
          if (!token) {
            next(CreateError(403, "token not provided"));
          } else {
            jwt.verify(token, "123",);
            next();
          }
        } catch (err) {
          next(CreateError(401,'invalid token'))
        }
      };
}

export default new AuthMiddleware().authenticateUser;