import joi from "joi";
import { userSchema } from "../utils/schema/userSchema.js";

const validateUser = (req, res, next) => {
  const user = req.body;
  const { value, error } = userSchema.validate(user);
  if (error) {
    return res.status(400).json({ error: "Invalid user" });
  }
  next();
};
export default validateUser;
