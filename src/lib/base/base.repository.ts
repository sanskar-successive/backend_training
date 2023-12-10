import { Model, ObjectId, UpdateQuery } from "mongoose";

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

    public createNew = async (field : T) : Promise<T> => {
        const data = await this.model.create(field);
        console.log("repo", data);
        return data;
    }

    public update = async (id : string | ObjectId, newData : UpdateQuery<T>) : Promise<void> => {
        await this.model.findByIdAndUpdate(id, newData);
    }

    public delete = async (id : string | ObjectId) : Promise<void> => {
        await this.model.findByIdAndDelete(id);
    }

}
export default BaseRepository;