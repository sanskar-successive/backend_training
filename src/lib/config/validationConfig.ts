import Joi, { ObjectSchema } from "joi";
import bookSchema from "../../modules/book/book.validation";
import customerSchema, { loginSchema } from "../../modules/customer/customer.validation";
import orderSchema from "../../modules/order/order.validation";
import inventorySchema from "../../modules/inventory/inventory.validation";
interface validateSchema {
  [key: string]: ObjectSchema<Joi.AnySchema>;
}

const validationConfig: validateSchema = {
    // book routes
    "/api/books/create POST" : bookSchema,
    "/api/books/update PATCH" : bookSchema,

    // customer routes
    "/api/customers/create POST" : customerSchema,
    "/api/customers/update PATCH" : customerSchema,
    "/api/customers/login POST" : loginSchema,

    // order routes 
    "/api/orders/create POST" : orderSchema,
    
    //inventory routes
    "/api/inventory/update PATCH" : inventorySchema
};

export default validationConfig;
