import { Response } from "express";
import { HttpError } from "http-errors";



class SystemResponse{

    
    public static success = (res : Response, message : string, data : unknown)=>{
        
        const successResponse = {
            message,
            status : res.statusCode,
            data
        }
        res.status(res.statusCode);
        res.send(successResponse);
    }

    public static error = (res : Response, err : HttpError)=>{

        const errorResponse = {
            error : err.name,
            message : err.message,
            stack : err.stack,
            status : err.status,
            headers : err.headers
        }
        res.status(err.status);
        res.send(errorResponse)
    }
}
export default SystemResponse;