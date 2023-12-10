// interface IBook {
//     title : string;
//     author : string;
//     price : number;
// }

import { Types } from "mongoose";

export interface IReview {
  customer: Types.ObjectId;
  text: string;
  rating: number;
}

export interface IAuthor {
  name: string;
  rating?: number;
}

interface IBook {
  title: string;
  author: IAuthor;
  price: number;
  genre:
    | "Fiction"
    | "Non-Fiction"
    | "Sci-Fi"
    | "Mystery"
    | "Fantasy"
    | "Historical"
    | "Other";
  publicationYear?: number;
  rating?: number;
  reviews?: IReview[];
  availability?: boolean;
  tags?: string[];
}

export default IBook;

