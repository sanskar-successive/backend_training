import IOrder from "./entities/IOrder";
import OrderRepository from "./repositories/order.repository";

class OrderService{

    private repo : OrderRepository;

    constructor(){
        this.repo = new OrderRepository();
    }
    public getAll = async ()=>{ 
        return await this.repo.getAll();
    }

    public getAllOrders = async ()=>{
        return await this.repo.getAllOrders();
    }

    public getByCustomerId = async (customerId : string)=>{
        return await this.repo.getByCustomerId(customerId)
    }

    public createNew = async (order : IOrder)=>{
        await this.repo.createNew(order);
    }
}
export default OrderService;