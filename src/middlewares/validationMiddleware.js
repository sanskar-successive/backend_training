import joi from "joi";
import { userSchema } from "../utils/schema/userSchema.js";
import CustomError from "../utils/errorClass.js";

const validateUser = (req, res, next) => {
  try {
    const user = req.body;
    const { value, error } = userSchema.validate(user, {abortEarly : false});
    if (error) {
      res.status(406).json(error)
    }
    else
      next();
  } catch (err) {
    next(new CustomError('Internal server error', 500))
  }
};
export default validateUser;
