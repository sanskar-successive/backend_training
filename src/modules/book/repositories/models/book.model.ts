import mongoose, { Schema } from "mongoose";
import { IAuthor, IBook, IMoreDetails } from "../../entities/IBook";

const authorSchema: Schema<IAuthor> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});






// const reviewSchema: Schema<IReview> = new mongoose.Schema({
//   userId: {
//     type: String,
//     required: true,
//   },
//   bookId: {
//     type: String,
//     required: true,
//   },
//   rating: {
//     type: Number,
//     required: true,
//   },
//   text: {
//     type: String,
//     required: true,
//   },
//   positive: { type: Boolean },
// }, {timestamps : true});








const moreDetailsSchema: Schema<IMoreDetails> = new mongoose.Schema({
  publisher: {
    type: String,
    required: true,
  },
  firstPublished: {
    type: String,
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
  language: {
    type: String,
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
  pages: {
    type: Number,
    required: true,
  },
  verified : {type : Boolean},
  edition : {type : Number}
});








const bookSchema: Schema<IBook> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  coverImage: { type: String },
  category: {
    type: String,
    required: true,
  },
  author: authorSchema,
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  moreDetails: moreDetailsSchema,
},{timestamps : true});

const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book;
