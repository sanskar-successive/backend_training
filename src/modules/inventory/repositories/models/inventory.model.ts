import { Schema, model } from "mongoose";
import IInventory from "../../entities/IInventory";

const inventorySchema = new Schema<IInventory>({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  quantity: { type: Number, required: true, default: 0 },
});
const Inventory = model<IInventory>("Inventory", inventorySchema);
export default Inventory;
