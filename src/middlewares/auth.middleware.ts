import jwt, { JwtPayload } from "jsonwebtoken";
import CreateError from 'http-errors';
import { NextFunction, Request, Response } from "express";

declare module 'express' {
  interface Request {
    user?: JwtPayload;
  }
}

class AuthMiddleware{

    public authenticateUser = (req:Request, res:Response, next:NextFunction):void => {
        try {
          const token = req.cookies.authToken;
          if (!token) {
            next(CreateError(403, "token not provided"));
          } else {
            jwt.verify(token, "123");
            
            next();
          }
        } catch (err) {
          next(CreateError(401,'invalid token'))
        }
      };
}

export default new AuthMiddleware().authenticateUser;