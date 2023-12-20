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

    public getUserById = async (userId : string) : Promise<IUser | null>=>{
        return await this.repo.getById(userId);
    }

    public createUser = async (user : IUser) : Promise<void> => {
        await this.repo.createNew(user);
    }

    public updateUser = async (userId : string, updatedUser : IUser) : Promise<void> => {

        await this.repo.updateUser(userId, updatedUser);
    }

    public deleteUser = async (userId : string ) : Promise<void> =>{
        return await this.repo.delete(userId);
    }

    public getUserByEmail = async (email : string) : Promise<IUser | null> =>{
        return await this.repo.findByEmail(email);
    }
}

export default UserService;