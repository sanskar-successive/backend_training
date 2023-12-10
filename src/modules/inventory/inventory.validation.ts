import Joi from "joi";

const inventorySchema = Joi.object({
  book: Joi.string().required(),
  quantity: Joi.number().integer().min(0).required(),
});

export default inventorySchema;