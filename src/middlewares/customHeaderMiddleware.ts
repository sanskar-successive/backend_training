import CreateError from 'http-errors';
import { NextFunction, Request, Response } from "express";

const customHeader = (custom_header:object) => {

  return (req:Request, res:Response, next:NextFunction) => {
    try {
      if (!Object.keys(custom_header).length) {
        next(CreateError(411,'header is not provided'))
        next()
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