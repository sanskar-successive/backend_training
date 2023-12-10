import { ObjectId } from "mongoose";
import BaseRepository from "../../../lib/base/base.repository";
import IInventory from "../entities/IInventory";
import Inventory from "./models/inventory.model";


class InventoryRepository extends BaseRepository<IInventory>{

    constructor(){
        super(Inventory);
    }
    public getByBookId = async (bookId : string | ObjectId) : Promise<IInventory | null>=>{
        const data =  await Inventory.findOne({book : bookId}).populate('book')
        console.log(data);
        return data;
    }

    public updateInventory = async (newStock : IInventory)=>{
        const {book, quantity} = newStock;
        const foundBook = await Inventory.findOne({book});

        if(foundBook){
            foundBook.quantity += quantity;
            await foundBook.save();
        }
        else {
            await Inventory.create(newStock);
        }
    }

    public deleteByBookId = async (bookId : string | ObjectId) => {
        await Inventory.findOneAndDelete({'book' : bookId});
    }

    
}
export default InventoryRepository;