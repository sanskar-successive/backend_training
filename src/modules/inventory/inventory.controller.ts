import { Request, Response } from "express";
import InventoryService from "./inventory.service";

class InventoryController{

    private service : InventoryService;

    constructor(){
        this.service = new InventoryService();
    }

    public getAll = async (req:Request, res:Response)=>{
        const inventory = await this.service.getAll();
        res.json(inventory);
    }

    public getByBookId = async (req:Request, res:Response)=>{
        const {bookId} = req.params;
        const inventory = await this.service.getByBookId(bookId);
        res.json(inventory);
    }

    public updateInventory = async (req:Request, res:Response)=>{
        const newStock = req.body;
        await this.service.updateInventory(newStock);
        res.json("inventory updated");
    }

    public deleteByBookId = async (req:Request, res:Response) => {
        const {bookId} = req.params;
        await this.service.deleteByBookId(bookId);
        res.json('book deleted from inventory')
    }

}
export default InventoryController;