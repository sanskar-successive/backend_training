import { Model, ObjectId, UpdateQuery } from "mongoose";

class BaseRepository<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  public getAll = async (): Promise<T[]> => {
    return await this.model.find();
  };

  public getById = async (id: string | ObjectId): Promise<T | null> => {
    return await this.model.findById(id);
  };

  public createNew = async (item: T): Promise<T | null> => {
    const itemCreated: T = await this.model.create(item);
    return itemCreated;
  };

  public update = async (
    id: string | ObjectId,
    newData: UpdateQuery<T>
  ): Promise<T | null> => {
    return await this.model.findByIdAndUpdate(id, newData);
  };

  public delete = async (id: string | ObjectId): Promise<T | null> => {
    return (await this.model.findByIdAndDelete(id)) as T;
  };
}
export default BaseRepository;
