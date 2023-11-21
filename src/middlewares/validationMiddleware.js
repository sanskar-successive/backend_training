import joi from "joi";
import { userSchema } from "../utils/schema/userSchema.js";
import createError from "http-errors";

const validateUser = (req, res, next) => {
  const user = req.body;
  const { value, error } = userSchema.validate(user);

  if (error) {
    return next(createError(400, 'Bad request, Invalid user'))
  }
  next();
};

export default validateUser;
