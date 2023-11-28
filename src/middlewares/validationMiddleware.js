import joi from "joi";
import { userSchema } from "../utils/schema/userSchema.js";
import CustomError from "../utils/errorClass.js";

const validateUser = (req, res, next) => {
  try {
    const user = req.body;
    if(!Object.keys(user).length){
      next(new CustomError('user is empty', 411));
      return;
    }
    const { value, error } = userSchema.validate(user);
    if (error) {
      next(new CustomError('Not acceptable', 406))
    }
    else
      next();
  } catch (err) {
    next(new CustomError('Internal server error', 500))
  }
};
export default validateUser;
