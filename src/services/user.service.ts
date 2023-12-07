import { ObjectId } from "mongoose";
import IUser from "../interfaces/IUser.js";
import UserRepository from "../repositories/user.repository.js"

class UserService {

    private repo : UserRepository;

    constructor(){
        this.repo = new UserRepository();
    }

    public getAllUsers = async () : Promise<IUser[] | null> =>{
        return await this.repo.getAll();
    }

    public getUserById = async (userId : string | ObjectId) : Promise<IUser | null>=>{
        return await this.repo.getUserByUserId(userId);
    }

    public createUser = async (user : IUser) : Promise<void> => {
        await this.repo.createNew(user);
    }

    public updateUser = async (userId : string | ObjectId, updatedUser : IUser) : Promise<void> => {

        await this.repo.updateUser(userId, updatedUser);
    }

    public deleteUser = async (userId : string | ObjectId) : Promise<void> =>{
        return await this.repo.deleteUser(userId);
    }

    public getUserByEmail = async (email : string) : Promise<IUser | null> =>{
        return await this.repo.findByEmail(email);
    }

    public getUserByUsername = async (username : string) : Promise<IUser | null> =>{
        return await this.repo.findByUsername(username);
    }

}

export default UserService;