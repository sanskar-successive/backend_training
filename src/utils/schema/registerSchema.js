import joi from "joi";

const registerSchema = joi.object({
  username: joi.string().alphanum().min(3).max(20).required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  confirm_password: joi.ref("password"),
});

export default registerSchema;