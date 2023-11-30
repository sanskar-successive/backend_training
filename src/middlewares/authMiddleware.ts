import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import CreateError from 'http-errors'

const authenticateUser = (req:Request, res:Response, next:NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      next(CreateError(403, 'token not provided'))
    } else {
      const decodedUser = jwt.verify(token, "123");
      req.body.user = decodedUser;
      next();
    }
  } catch (err) {
    next(CreateError(401, 'invalid token'))
  }
};

export default authenticateUser;