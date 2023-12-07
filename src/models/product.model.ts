import mongoose from "mongoose";
import IProduct from "../interfaces/IProduct.js";

const productSchema = new mongoose.Schema<IProduct>({
    productId : {type : String},
    productName : {type : String},
    productDesc : {type : String},
    userId : {type : String}
})

const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;