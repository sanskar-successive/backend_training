import { ObjectId } from "mongoose";
import IUser from "../interfaces/IUser.js";
import User from "../models/user.model.js";
import BaseRepository from "./base.repository.js";
import IProduct from "../interfaces/IProduct.js";
import Product from "../models/product.model.js";

class UserRepository extends BaseRepository<IUser>{

    constructor(){
        super(User);
    }

    public getUserByUserId = async (userId : string | ObjectId) : Promise<IUser | null> =>{
        const user = await User.findOne({userId});
        return user;
    }

    public updateUser = async (userId : string | ObjectId, newData : IUser) : Promise<void> => {
        await User.findOneAndUpdate({userId}, newData);

    }

    public deleteUser = async (userId : string | ObjectId) : Promise<void> => {
        await User.deleteOne({userId});
    }

    public findByUsername = async (username : string) : Promise<IUser | null> =>{
        const user = await User.findOne({username});
        return user;
    }

    public findByEmail = async (email : string) : Promise<IUser | null> =>{
        const user = await User.findOne({email});
        return user;
    }

    public getAllProducts = async (userId : string | ObjectId) : Promise<IProduct[]>=>{
        const products : IProduct[] =  await Product.find({userId});
        return products;
    }
    
} 
export default UserRepository;