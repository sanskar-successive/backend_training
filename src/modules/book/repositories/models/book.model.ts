import { Schema, model } from "mongoose";
import IBook, { IAuthor, IReview } from "../../entities/IBook";

const reviewSchema: Schema<IReview> = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const authorSchema: Schema<IAuthor> = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
});

const bookSchema: Schema<IBook> = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: authorSchema,
    required: true,
  },
  genre: {
    type: String,
    enum: [
      "Fiction",
      "Non-Fiction",
      "Sci-Fi",
      "Mystery",
      "Fantasy",
      "Historical",
      "Other",
    ],
    required: true,
    default : "Fiction"
  },
  publicationYear: {
    type: Number,
  },
  price: {
    type: Number,
    min: 0,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  reviews: [reviewSchema],
  availability: {
    type: Boolean,
    default: true,
  },
  tags: [{ type: String }],
});

const Book = model<IBook>("Book", bookSchema);
export default Book;
