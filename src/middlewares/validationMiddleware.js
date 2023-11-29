import joi from "joi";
import { userSchema } from "../utils/schema/userSchema.js";
import CustomError from "../utils/errorClass.js";
import CreateError from 'http-errors';

const validateUser = (req, res, next) => {
  try {
    const user = req.body;
    if(!Object.keys(user).length){
      next(CreateError(411, 'user is empty'))
      return;
    }
    const { value, error } = userSchema.validate(user);
    if (error) {
      next(CreateError(406, 'not acceptable'))
    }
    else
      next();
  } catch (err) {
    next(CreateError(500, 'internal server error'))
  }
};
export default validateUser;
