import joi, { ObjectSchema } from "joi";
import validationConfig from "../utils/validationConfig.js";
import CreateError from 'http-errors';
import { NextFunction, Request, Response } from "express";



const dynamicValidation = (req:Request, res:Response, next:NextFunction) => {
  try {
    const path = req.url;
    const method = req.method;
    const key = `${path.substring(1)} ${method}`;
    console.log(key);
    if (Object.keys(validationConfig).includes(key)) {
      const schema = validationConfig[key];
      const toValidate = req.body;
      const { value, error } = schema.validate(toValidate,{abortEarly : false});
      if (error) {
        res.status(406).json(error);
        return;
      }
    }
    next();
  } catch (err) {
    next(CreateError(500, 'internal server error'))
  }
};
export default dynamicValidation;
