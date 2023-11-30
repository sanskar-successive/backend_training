import { NextFunction, Request, Response } from "express";
import CreateError from 'http-errors'

const customHeader = (custom_header:any) => {

  return (req:Request, res:Response, next:NextFunction) => {
    try {
      if (!Object.keys(custom_header).length) {
        next(CreateError(411, 'nothing provided in header'))
      } else {
        res.set(custom_header);
        next();
      }
    } catch (err) {
        next(CreateError(500, 'internal server error'))
    }
  };
};

export default customHeader;