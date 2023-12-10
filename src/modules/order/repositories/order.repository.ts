import BaseRepository from "../../../lib/base/base.repository";
import IOrder from "../entities/IOrder";
import Order from "./models/order.model";

class OrderRepository extends BaseRepository<IOrder>{

    constructor(){
        super(Order);
    }

    public getAllOrders = async ()=>{
        return await Order.find().populate('customer').populate('books');
    }

    public getByCustomerId = async (customerId : string)=>{
        return await Order.findOne({'customer' : customerId}).populate('customer').populate('books');
    }


}
export default OrderRepository;