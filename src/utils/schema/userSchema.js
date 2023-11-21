import joi from "joi";

export const userSchema = joi.object({
  username: joi.string().alphanum().min(3).max(10).required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
