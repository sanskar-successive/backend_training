import { ObjectSchema } from "joi";
import loginSchema from "./schema/loginSchema.js";
import registerSchema from "./schema/registerSchema.js";
import joi from 'joi'
interface validateSchema {
  [key: string]: ObjectSchema<joi.AnySchema>;
}
const validationConfig: validateSchema = {
  "login POST": loginSchema,
  "register POST": registerSchema,
};

export default validationConfig;
