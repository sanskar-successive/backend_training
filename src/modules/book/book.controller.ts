import { Request, Response } from "express";
import BookService from "./book.service";
import { IBook } from "./entities/IBook";
import csvtojson from 'csvtojson'
import Papa from 'papaparse';
import fs from 'fs'

class BookController {
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  public getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const books: IBook[] | null = await this.bookService.getAll();
      res.status(200).json(books);
    } catch (error) {
      res.status(404).json(error)
    }
  };

  public getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { bookId } = req.params;
      const book: IBook | null = await this.bookService.getById(bookId);
      res.status(200).json(book);
    } catch (error) {
      res.status(404).json(error)
    }
  };

  public createNew = async (req: Request, res: Response): Promise<void> => {
    try {

      const createdBook: IBook | null = await this.bookService.createNew(
        req.body
      );
      res
        .status(200)
        .json({ message: "book created successfully", createdBook });
    } catch (error) {
      res.status(404).json(error)
    }
  };

  public update = async (req: Request, res: Response): Promise<void> => {
    try {
      const { bookId } = req.params;
      const updatedDetails = req.body;
      const updatedBook: IBook | null = await this.bookService.update(
        bookId,
        updatedDetails
      );
      res.json({ message: "book updated successfully", updatedBook });
    } catch (error) {
      res.status(404).json(error);
    }
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const { bookId } = req.params;
      const deletedBook = await this.bookService.delete(bookId);
      res.json({ message: "book deleted successfully", deletedBook });
    } catch (error) {
      res.status(404).json(error)
    }
  };


  public bulkUpload = async (req : Request, res : Response) : Promise<void> =>{

    try {
      const csvFile : Express.Multer.File | undefined = req.file;
      // console.log(csvFile);
      console.log(csvFile?.path);

      if(csvFile){
        const convertedJson = await csvtojson().fromFile(csvFile.path);
        for(let i=0;i<5;i++){
          console.log(convertedJson[i]);
        }

        // await this.bookService.bulkUpload(convertedJson);
        res.status(200).send(convertedJson);
      }
      else{
        res.status(404).json("no csv file selected")
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }


  public bulkBookUpload = async (req:Request, res:Response)=>{
    try {

      const csvFile : Express.Multer.File | undefined = req.file;
      if(csvFile){
        const readStream = fs.createReadStream(csvFile.path);
        const parsedData: unknown[] = [];
        Papa.parse(readStream,{
          header : true,
          dynamicTyping : true,
          step : (result)=>{
            console.log(result.data);
            parsedData.push(result.data);
          },
          complete : ()=>{
            res.status(201).json(parsedData);
          }
        })
      }
      else{
        res.status(404).json("no file selected")
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }
}
export default BookController;
