import mongoose, { Schema } from "mongoose";
import IOrder, { IAddress, IOrderBook } from "../../entities/IOrder";


const addressSchema : Schema<IAddress> = new Schema({
    street: { type: String, required: true , default : "1A"},
    city: { type: String, default: 'Noida' },
    zipCode: { type: String, required: true, default: "111111" },
    country: { type: String, default: 'India' },
  });
  

const orderBookSchema : Schema<IOrderBook> = new Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const orderSchema : Schema<IOrder> = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  books: [orderBookSchema],
  orderDate: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
    required: true,
  },
  shippingAddress: addressSchema
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
