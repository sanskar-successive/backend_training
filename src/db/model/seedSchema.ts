import mongoose from 'mongoose'
const seedSchema = new mongoose.Schema({
    country : {type : String, required : true}
})
const playingCountriesModel = mongoose.model('playing_countries', seedSchema);
export default playingCountriesMode