import { Request, Response } from "express";
import OrderService from "./order.service";
import IInventory from "../inventory/entities/IInventory";
import InventoryService from "../inventory/inventory.service";
import IOrder from "./entities/IOrder";

class OrderController {
  private service: OrderService;
  private inventoryService: InventoryService;

  constructor() {
    this.service = new OrderService();
    this.inventoryService = new InventoryService();
  }
  public getAll = async (req: Request, res: Response) => {
    const orders = this.service.getAll();
    res.json(orders);
  };

  public getAllOrders = async (req: Request, res: Response) => {
    const order = await this.service.getAllOrders();
    res.json(order);
  };

  public getByCustomerId = async (req: Request, res: Response) => {
    const { customerId } = req.params;
    const orders = await this.service.getByCustomerId(customerId);
    res.json(orders);
  };

  public createNew = async (req: Request, res: Response) => {
    const order: IOrder = req.body;
    const exceededQuantities = [];
    const orders = [];
    for (const item of order.books) {
      const { bookId, quantity } = item;

      const prevStock: IInventory | null =
        await this.inventoryService.getByBookId(bookId.toString());

      if (prevStock) {
        if (prevStock.quantity < quantity) {
          exceededQuantities.push({ bookId, quantity });
        }
        else{
            const newQuantity = prevStock.quantity-quantity;
            orders.push({bookId,newQuantity});
        }
      }
    }

    if (exceededQuantities.length) {
      res.json(
        `not enough quantities following books \n ${exceededQuantities}`
      );
      return;
    }

    await this.service.createNew(order);

    for (const item of orders) {
      const { bookId, newQuantity } = item;
      await this.inventoryService.updateInventory({book : bookId, quantity : newQuantity});
    }

    res.json("order created successfully");
  };
}
export default OrderController;
