import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/errorClass.js";
const queryValidation = (req:Request, res:Response, next:NextFunction) => {
  try{
    const query = req.query;
    if(!Object.keys(query).length){
      next();
      return;
    }

    console.log(typeof query.query1); 

    if (isNaN(queryToCheck)) {
      next(new CustomError("not a numeric value", 406));
    } else {
      next();
    }
  }
  catch(err){
    next(new CustomError('Internal server error', 500))
  }
};
export default queryValidation;
