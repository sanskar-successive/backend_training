import { ObjectId } from "mongoose";
import ProductRepository from "../repositories/product.repository.js";
import IProduct from "../interfaces/IProduct.js";

class ProductService {

    private repo : ProductRepository;

    constructor(){
        this.repo = new ProductRepository();
    }

    public getAllProducts = async () : Promise<IProduct[] | null> =>{
        return await this.repo.getAll();
    }

    public getProductById = async (productId : string | ObjectId) : Promise<IProduct | null>=>{
        return await this.repo.getByProductId(productId);
    }

    public createProduct = async (product : IProduct) : Promise<void> => {
        await this.repo.createNew(product);
    }

    public updateProduct = async (productId : string | ObjectId, updatedProduct : IProduct) : Promise<void> => {

        await this.repo.updateProduct(productId, updatedProduct);
    }

    public deleteProduct = async (productId : string | ObjectId) : Promise<void> =>{
        return await this.repo.delete(productId);
    }

    public getProductsByUserId = async (userId : string | ObjectId) : Promise<IProduct[] | null> => {
        return await this.repo.getProductsByUserId(userId);
    }
}

export default ProductService;