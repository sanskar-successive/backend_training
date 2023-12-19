import { Request, Response } from "express";
import BookService from "./book.service";
import { IBook } from "./entities/IBook";

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
}
export default BookController;
