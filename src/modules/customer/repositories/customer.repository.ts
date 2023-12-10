import BaseRepository from "../../../lib/base/base.repository";
import ICustomer from "../entities/ICustomer";
import Customer from "./models/customer.model";


class CustomerRepository extends BaseRepository<ICustomer>{

    constructor(){
        super(Customer);
    }
    
    public getByEmail = async (email : string) : Promise<ICustomer | null> =>{
        return await Customer.findOne({email});
    }
} 
export default CustomerRepository;