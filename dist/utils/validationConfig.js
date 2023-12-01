import loginSchema from "./schema/loginSchema.js";
import registerSchema from "./schema/registerSchema.js";
const validationConfig = {
    "login POST": loginSchema,
    "register POST": registerSchema,
};
export default validationConfig;
