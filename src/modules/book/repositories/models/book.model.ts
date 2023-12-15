import mongoose, { Schema } from "mongoose";
import { IAuthor, IBook, IMoreDetails, IReview } from "../../entities/IBook";






const authorSchema: Schema<IAuthor> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  rating: { type: Number },
});







const reviewSchema: Schema<IReview> = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: { type: String },
  helpful: { type: Boolean },
});






const moreDetailsSchema: Schema<IMoreDetails> = new mongoose.Schema({
  publishDetails: {
    name: {
      type: String,
      required: true,
    },
    lastPublished: {
      type: Date,
      required: true,
    },
  },
  seller: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    enum: ["English", "Hindi"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fileSize: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});






const bookSchema: Schema<IBook> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  coverImage: { type: String },
  category: {
    type: String,
    enum: ["Category1", "Category2", "Category3"],
    required: true,
  },
  author: authorSchema,
  globalRating: {
    type: Number,
    required: true,
  },
  reviews: [reviewSchema],
  price: {
    type: Number,
    required: true,
  },
  moreDetails: moreDetailsSchema,
  tags: [String],
  rank: { type: Number },
  categoryRank: { type: Number },
});




const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;
