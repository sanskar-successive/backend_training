import CustomError from "../utils/errorClass.js";
import axios from 'axios'

const getGeoLocation = async (req, res, next) => {
  try{
    const key = "29f6aafef213de059431ac964c670b6d";
    const ip = "103.83.71.179";
    const response = await axios.get(`http://api.ipstack.com/${ip}?access_key=${key}`);
    const region = response.data.country_name;
    if(region === "India") {
      next();
    }
    else{
      next(new CustomError('Not authorised', 401));
    }
  }
  catch(err){
    next(new CustomError('Error occured in data fetching', 403))
  }
};
export default getGeoLocation;
