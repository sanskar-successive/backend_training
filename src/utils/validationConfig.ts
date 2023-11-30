import joi, { ObjectSchema } from "joi";
interface validationInterface{
  [key : string]:ObjectSchema<any>
}
const validationConfig :validationInterface = {
  "/login": joi.object({
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
  }),

  "/register": joi.object({
    username: joi.string().alphanum().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    confirm_password: joi.ref("password"),
  }),
};

export default validationConfig;
