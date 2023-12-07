import { ObjectSchema } from "joi";
import loginSchema from "./schema/loginSchema.js";
import registerSchema from "./schema/registerSchema.js";
interface validateSchema {
  [key: string]: ObjectSchema<any>;
}
const validationConfig: validateSchema = {
  "login POST": loginSchema,
  "register POST": registerSchema,
};

export default validationConfig;
