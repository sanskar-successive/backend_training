import axios from 'axios'
import { NextFunction, Request, Response } from "express";
import CreateError from 'http-errors';

class GeoLocationMiddleware{

    public async getGeoLocation(req:Request, res:Response, next:NextFunction):Promise<void>{
        try{
          const key = "29f6aafef213de059431ac964c670b6d";
          const ip = "103.83.71.179";
          const response = await axios.get(`http://api.ipstack.com/${ip}?access_key=${key}`);
          const region = response.data.country_name;
          if(region === "India") {
            next();
          }
          else{
            next(CreateError(401, 'not authorized'))
          }
        }
        catch(err){
          next(CreateError(403, 'not acceccible at this location)'))
        }
      };
}


export default new GeoLocationMiddleware().getGeoLocation;
