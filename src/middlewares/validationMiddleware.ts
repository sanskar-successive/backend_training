import joi from "joi";
import { userSchema } from "../utils/schema/userSchema.js";
import { NextFunction, Request, Response } from "express";
import CreateError from 'http-errors'

const validateUser = (req:Request, res:Response, next:NextFunction) => {
  try {
    const user = req.body;
    if(!Object.keys(user).length){
      next(CreateError(411, 'user in body is empty'))
      return;
    }
    const { value, error } = userSchema.validate(user);
    if (error) {
      next(CreateError(406, 'schema validation, not acceptable'))
    }
    else
      next();
  } catch (err) {
    next(CreateError(500, 'internal server error'))
  }
};
export default validateUser;
