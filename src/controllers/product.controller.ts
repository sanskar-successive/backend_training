import { Request, Response } from "express";
import ProductService from "../services/product.service.js";
import IProduct from "../interfaces/IProduct.js";

class ProductController{

  private productService : ProductService;

  constructor(){
    this.productService = new ProductService();
  }

  public getAllProducts = async (req : Request, res : Response) : Promise<void> => {
    const products : IProduct[] | null = await this.productService.getAllProducts();
    res.status(200).json(products);
  }

  public createNewProduct = async (req : Request, res : Response) : Promise<void> => {
    await this.productService.createProduct(req.body);
    res.status(201).json("product created successfully");
  }

  public updateProduct = async (req:Request, res:Response) : Promise<void> => {
    const {productId} = req.params;
    const updatedProduct = req.body;
    await this.productService.updateProduct(productId, updatedProduct);
    res.json("product updated successfully");
  }

  public deleteProduct = async (req:Request, res:Response) : Promise<void> => {
    const {productId} = req.params;
    await this.productService.deleteProduct(productId);
    res.json("product deleted successfully");
  }

}
export default ProductController;
