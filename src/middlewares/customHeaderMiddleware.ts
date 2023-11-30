import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/errorClass.js";

const customHeader = (custom_header:any) => {

  return (req:Request, res:Response, next:NextFunction) => {
    try {
      if (!Object.keys(custom_header).length) {
        next(new CustomError("nothing provided in header", 411));
      } else {
        res.set(custom_header);
        next();
      }
    } catch (err) {
        next(new CustomError("internal server error", 500))
    }
  };
};

export default customHeader;