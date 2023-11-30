import jwt from 'jsonwebtoken';
import CustomError from "../utils/errorClass.js";
import { NextFunction, Request, Response } from 'express';

const authenticateUser = (req:Request, res:Response, next:NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      next(new CustomError("token not provided", 403));
    } else {
      const decodedUser = jwt.verify(token, "123");
      req.user = decodedUser;
      next();
    }
  } catch (err) {
    next(new CustomError("invalid token", 401));
  }
};

export default authenticateUser;
