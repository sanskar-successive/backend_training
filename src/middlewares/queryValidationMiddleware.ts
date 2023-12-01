import { NextFunction, Request, Response } from "express";
import CreateError from 'http-errors';

const queryValidation = (req:Request, res:Response, next:NextFunction) => {
  try{
    const query:any = req.query;
    if(!Object.keys(query).length){
      next();
      return;
    }
    if (isNaN(query.query1)) {
      next(CreateError(406, 'not a numeric value'))
    } else {
      next();
    }
  }
  catch(err){
    next(CreateError(500, 'internal server error'))
  }
};
export default queryValidation;
