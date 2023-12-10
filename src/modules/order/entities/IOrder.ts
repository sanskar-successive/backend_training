import { Types } from "mongoose";

export interface IOrderBook {
  bookId: Types.ObjectId;
  quantity: number;
  price: number;
}

export interface IAddress {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  }
  

interface IOrder {
  customer: Types.ObjectId;
  books: IOrderBook[];
  orderDate: Date;
  total: number;
  shippingAddress: IAddress;
}

export default IOrder;
