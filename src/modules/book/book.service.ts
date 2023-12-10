import { ObjectId } from "mongoose";
import BookRepository from "./repositories/book.repository";
import IBook from "./entities/IBook";

class BookService {

    private repo : BookRepository;

    constructor(){
        this.repo = new BookRepository();
    }

    public getAll = async () : Promise<IBook[] | null> =>{
        return await this.repo.getAll();
    }

    public getById = async (bookId : string | ObjectId) : Promise<IBook | null>=>{
        return await this.repo.getById(bookId);
    }

    public createNew = async (book : IBook) : Promise<IBook> => {
        const createdBook = await this.repo.createNew(book);
        console.log("service", createdBook);
        return createdBook;
    }

    public update = async (bookId : string | ObjectId, updatedBook : IBook) : Promise<void> => {

        await this.repo.update(bookId, updatedBook);
    }

    public delete = async (bookId : string | ObjectId) : Promise<void> =>{
        return await this.repo.delete(bookId);
    }


}

export default BookService;