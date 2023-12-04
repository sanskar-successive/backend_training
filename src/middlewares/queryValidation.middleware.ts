import { NextFunction, Request, Response } from "express";
import CreateError from 'http-errors';

class QueryValidationMiddleware{

public queryValidation = (req:Request, res:Response, next:NextFunction):void => {
  try{
    if(!Object.keys(req.query).length){
      next();
      return;
    }
    const {query1} = req.query;
    if (isNaN(Number(query1))) {
      next(CreateError(406, 'not a numeric value'))
    } else {
      next();
    }
  }
  catch(err){
    next(CreateError(500, 'internal server error(query validation middleware)'))
  }
}
}
export default new QueryValidationMiddleware().queryValidation;
