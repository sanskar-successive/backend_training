import { NextFunction, Request, Response } from "express";
import axios from 'axios'
import CreateError from 'http-errors'

const getGeoLocation = async (req:Request, res:Response, next:NextFunction) => {
  try{
    const key = "29f6aafef213de059431ac964c670b6d";
    const ip = "103.83.71.179";
    const response = await axios.get(`http://api.ipstack.com/${ip}?access_key=${key}`);
    const region = response.data.country_name;
    if(region === "India") {
      next();
    }
    else{
      next(CreateError(401, 'geoloaction not authorized'))
    }
  }
  catch(err){
    next(CreateError(403, 'error occured in data fetching'))
  }
};
export default getGeoLocation;
