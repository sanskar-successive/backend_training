import mongoose from "mongoose";

class DBConnection {
  private mongoUri: string = "mongodb://127.0.0.1:27017/testdb";

  public connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(this.mongoUri);
      console.log("db connected successfully");
      // await this.seedDb();
    } catch (err) {
      console.log("connection to db failed");
    }
  };

  // private seedDb = async () : Promise<void>=>{
  //   await playingCountriesModel.deleteMany({});
  //   await playingCountriesModel.insertMany({countryName : "india"})
  // }
}

export default DBConnection;
