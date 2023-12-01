import jwt from "jsonwebtoken";
import CreateError from 'http-errors';
import { NextFunction, Request, Response } from "express";


declare module 'express' {
  interface Request {
    user?: any;
  }
}

const authenticateUser = (req:Request, res:Response, next:NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      next(CreateError(403, "token not provided"));
    } else {
      const decodedUser = jwt.verify(token, "123");
      req.user = decodedUser;
      next();
    }
  } catch (err) {
    next(CreateError(401,'invalid token'))
  }
};

export default authenticateUser;
