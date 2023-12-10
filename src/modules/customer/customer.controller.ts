import {  Request, Response } from "express";
import CustomerService from "./customer.service";
import ICustomer from "./entities/ICustomer";
import jwt from 'jsonwebtoken'
import ILogin from "./entities/ILogin";

class CustomerController{

  private customerService : CustomerService;

  constructor(){
    this.customerService = new CustomerService();
  }

  public getAll = async (req : Request, res : Response) : Promise<void> => {
      const customers : ICustomer[] | null = await this.customerService.getAll();
      res.status(200).json(customers);
  }

  public getById = async (req : Request, res : Response) : Promise<void> => {

      const {customerId} = req.params;
      const customer : ICustomer | null = await this.customerService.getById(customerId);
      res.status(200).json(customer);
 
  }

  public createNew = async (req : Request, res : Response) : Promise<void> => {
    await this.customerService.createNew(req.body);
    res.status(201).json("customer created successfully");
  }


  public update = async (req:Request, res:Response) : Promise<void> => {
    const {customerId} = req.params;
    const updatedCustomer = req.body;
    await this.customerService.update(customerId, updatedCustomer);
    res.json("customer updated successfully");
  }

  public delete = async (req:Request, res:Response) : Promise<void> => {
    const {customerId} = req.params;
    await this.customerService.delete(customerId);
    res.json("customer deleted successfully");
  }


  public login = async (req : Request, res : Response) : Promise<void> => {
 
    const customerDetails : ILogin = req.body;
    const customerInDb = await this.customerService.getByEmail(customerDetails.email);

    if(!customerInDb) res.status(403).json({message:"customer not found (invalid email"});
    else if(customerInDb.password !== customerDetails.password){
        res.status(403).json({message:"customer invalid password"});
    }
    else{
        const token : string = jwt.sign(customerDetails, "123");
        res.cookie('authToken', token);
        res.status(201).json({message:"customer logged in successfully"});
    }
}

}
export default CustomerController;
