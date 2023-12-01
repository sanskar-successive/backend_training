import { NextFunction, Request, Response } from "express";
import CreateError from 'http-errors'

const queryValidation = (req:Request, res:Response, next:NextFunction) => {
  try{
    const query = req.query;
    console.log(query);
    if(!Object.keys(query).length){
      next();
      return;
    }
    const queryToCheck:any = query.query1;
    if (isNaN(queryToCheck)) {
      next(CreateError(406, 'query not a numeric value'))
    } else {
      next();
    }
  }
  catch(err){
    next(CreateError(500, 'internal server error'))
  }
};
export default queryValidation;
