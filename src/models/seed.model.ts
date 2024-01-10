import { Schema, model } from "mongoose";
import ICountry from "../interfaces/ICountry.js";

const seedSchema = new Schema<ICountry>({
    countryName : {type : String, required : true}
})
const playingCountriesModel = model<ICountry>('playing_countries', seedSchema);
export default playingCountriesModel;