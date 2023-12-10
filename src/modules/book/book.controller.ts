import { Request, Response } from "express";
import BookService from "./book.service";
import IBook from "./entities/IBook";
import InventoryService from "../inventory/inventory.service";
import { Types } from "mongoose";

class BookController{

  private bookService : BookService;
  private inventoryService : InventoryService

  constructor(){
    this.bookService = new BookService();
    this.inventoryService = new InventoryService();
  }

  public getAll = async (req : Request, res : Response) : Promise<void> => {
    const books : IBook[] | null = await this.bookService.getAll();
    res.status(200).json(books);
  }

  public getById = async (req : Request, res : Response) : Promise<void> => {
    const {bookId} = req.params;
    const book : IBook | null = await this.bookService.getById(bookId);
    res.status(200).json(book);
  }

  public createNew = async (req : Request, res : Response) : Promise<void> => {

    // eslint-disable-next-line
    const createdBook : any  = await this.bookService.createNew(req.body);
    console.log("controller", createdBook);

    const bookId : Types.ObjectId = createdBook._id;
    await this.inventoryService.updateInventory({book : bookId, quantity : 1});
    res.status(201).json("book created successfully");
  }

  public update = async (req:Request, res:Response) : Promise<void> => {
    console.log('baseUrl', req.baseUrl);
    console.log("path", req.url)
    const part = req.url.split('/');
    console.log(`${req.baseUrl}/${part[1]}`)
    const {bookId} = req.params;
    const updatedBook = req.body;
    await this.bookService.update(bookId, updatedBook);
    res.json("book updated successfully");
  }

  public delete = async (req:Request, res:Response) : Promise<void> => {
    const {bookId} = req.params;
    await this.bookService.delete(bookId);
    await this.inventoryService.deleteByBookId(bookId);
    res.json("book deleted successfully");
  }

}
export default BookController;
