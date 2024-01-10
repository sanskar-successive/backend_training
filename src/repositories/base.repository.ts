import { Model, ObjectId } from "mongoose";

class BaseRepository<T>{
    
    private model : Model<T>;

    constructor(model : Model<T>){
        this.model = model;
    }

    public getAll = async () : Promise<T[] | null>=>{
        return await this.model.find();
    }

    public getById = async (id : string | ObjectId) : Promise<T | null> => {
        return await this.model.findById(id);
    }

    public createNew = async (field : T) : Promise<void> => {
        await this.model.create(field);
    }

    public delete = async (id : string | ObjectId) : Promise<void> => {
        await this.model.findByIdAndDelete(id);
    }
}
export default BaseRepository;