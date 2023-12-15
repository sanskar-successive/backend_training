import Joi, { ObjectSchema } from "joi";
import { bookSchema } from "../../modules/book/book.validation";
import { loginSchema, userSchema } from "../../modules/user/user.validation";
interface validateSchema {
  [key: string]: ObjectSchema<Joi.AnySchema>;
}

const validationConfig: validateSchema = {
    // book routes
    "books POST" : bookSchema,
    "books PATCH" : bookSchema,

    // user routes
    "users POST" : userSchema,
    "users PATCH" : userSchema,
    "login POST" : loginSchema,

};

export default validationConfig;
