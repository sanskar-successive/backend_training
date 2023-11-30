import { NextFunction, Request, Response } from "express";

const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
  console.log('error handler chal rha hai');
  return res.status(err.statusCode).json({error : err.message});
};
export default errorHandler;