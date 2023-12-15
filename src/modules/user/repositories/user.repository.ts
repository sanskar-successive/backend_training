import BaseRepository from "../../../lib/base/base.repository";
import { IUser } from "../entities/IUser";
import User from "./models/user.model";


class UserRepository extends BaseRepository<IUser>{

    constructor(){
        super(User);
    }
    
    public getByEmail = async (email : string) : Promise<IUser | null> =>{

        return await User.findOne({'contact.email' : email});
 
    }
} 
export default UserRepository;