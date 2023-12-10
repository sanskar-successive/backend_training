import Joi from "joi";

const orderBookSchema = Joi.object({
  bookId: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
  price: Joi.number().min(0).required(),
});

const addressSchema = Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
})

const orderSchema = Joi.object({
  customer: Joi.string().required(),
  books: Joi.array().items(orderBookSchema).min(1).required(),
  orderDate: Joi.date().iso(),
  total: Joi.number().min(0).required(),
  shippingAddress: addressSchema.required()
});

export default orderSchema;