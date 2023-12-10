import Joi from "joi";

const reviewSchema = Joi.object({
  user: Joi.string().required(),
  text: Joi.string().required(),
  rating: Joi.number().required(),
});

const authorSchema = Joi.object({
  name: Joi.string().required(),
  rating: Joi.number(),
});

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: authorSchema.required(),
  price: Joi.number().required(),
  genre: Joi.string()
    .valid(
      "Fiction",
      "Non-Fiction",
      "Sci-Fi",
      "Mystery",
      "Fantasy",
      "Historical",
      "Other"
    )
    .required(),
  publicationYear: Joi.number(),
  rating: Joi.number(),
  reviews: Joi.array().items(reviewSchema),
  availability: Joi.boolean(),
  tags: Joi.array().items(Joi.string()),
});

export default bookSchema;
