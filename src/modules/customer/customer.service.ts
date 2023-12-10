import { ObjectId } from "mongoose";
import CustomerRepository from "./repositories/customer.repository";
import ICustomer from "./entities/ICustomer";

class CustomerService {

    private repo : CustomerRepository;

    constructor(){
        this.repo = new CustomerRepository();
    }

    public getAll = async () : Promise<ICustomer[] | null> =>{
        return await this.repo.getAll();
    }

    public getById = async (customerId : string | ObjectId) : Promise<ICustomer | null>=>{
        return await this.repo.getById(customerId);
    }

    public createNew = async (customer : ICustomer) : Promise<void> => {
        await this.repo.createNew(customer);
    }

    public update = async (customerId : string | ObjectId, updatedUser : ICustomer) : Promise<void> => {
        await this.repo.update(customerId, updatedUser);
    }

    public delete = async (customerId : string | ObjectId) : Promise<void> =>{
        return await this.repo.delete(customerId);
    }

    public getByEmail = async (email : string) : Promise<ICustomer | null> =>{
        return await this.repo.getByEmail(email);
    }

}

export default CustomerService;