import { ObjectId } from "mongoose";
import IProduct from "../interfaces/IProduct.js";
import Product from "../models/product.model.js";
import BaseRepository from "./base.repository.js";

class ProductRepository extends BaseRepository<IProduct>{

    constructor(){
        super(Product);
    }

    public updateProduct = async (productId : string | ObjectId, newData : IProduct) : Promise<void>=> {
        await Product.findOneAndUpdate({productId}, {productName : newData.productName, productDesc : newData.productDesc});
    }

    public getByProductId = async (productId : string | ObjectId) : Promise<IProduct | null>=>{
        return await Product.findOne({productId});
    }

    public getProductsByUserId = async (userId : string | ObjectId) : Promise<IProduct[] | null> => {
        return await Product.find({userId});
    }

}
export default ProductRepository;