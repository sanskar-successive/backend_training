import { Model, ObjectId, UpdateQuery } from "mongoose";

class BaseRepository<T extends Document>{
    
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

    public createNew = async (entity : T) : Promise<T> => {
        const data = new this.model(entity);
        // const data = await this.model.create(field);

        const savedData = data.save();
        console.log("repo", data);
        // return data;
        return savedData;
    }

    public update = async (id : string | ObjectId, newData : UpdateQuery<T>) : Promise<void> => {
        await this.model.findByIdAndUpdate(id, newData);
    }

    public delete = async (id : string | ObjectId) : Promise<void> => {
        await this.model.findByIdAndDelete(id);
    }

}
export default BaseRepository;