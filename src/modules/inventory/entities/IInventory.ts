import { Types } from "mongoose";

interface IInventory{
    book : Types.ObjectId | string;
    quantity : number;
}
export default IInventory;