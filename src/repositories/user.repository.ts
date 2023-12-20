import { ObjectId } from "mongoose";
import IUser from "../interfaces/IUser.js";
import User from "../models/user.model.js";
import BaseRepository from "./base.repository.js";

class UserRepository extends BaseRepository<IUser>{

    constructor(){
        super(User);
    }

    public updateUser = async (userId : string | ObjectId, newData : IUser) : Promise<void> => {
        await User.findByIdAndUpdate(userId, newData);
    }

    public findByEmail = async (email : string) : Promise<IUser | null> =>{
        const user = await User.findOne({email});
        return user;
    }
} 
export default UserRepository;