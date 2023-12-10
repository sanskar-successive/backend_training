import { ObjectId } from "mongoose";
import IInventory from "./entities/IInventory";
import InventoryRepository from "./repositories/inventory.repository";

class InventoryService{

    private repo : InventoryRepository;

    constructor(){
        this.repo = new InventoryRepository();
    }

    public getAll = async ()=>{
        return await this.repo.getAll();
    }

    public getByBookId = async (bookId : ObjectId | string)=>{

        return await this.repo.getByBookId(bookId);
    }

    public updateInventory = async (newStock : IInventory)=>{
        await this.repo.updateInventory(newStock);
    }

    public deleteByBookId = async (bookId : string | ObjectId) => {
        await this.repo.deleteByBookId(bookId);
    }
 
}
export default InventoryService;