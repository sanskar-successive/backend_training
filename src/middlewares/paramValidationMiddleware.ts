import { NextFunction, Request, Response } from "express";
import CreateError from 'http-errors'

const paramValidation = (req:Request,res:Response,next:NextFunction)=>{
    const {id}:any = req.params;
    if(isNaN(id)){
        next(CreateError(406, 'not a valid param'))
    }   
    else{
        next();   
    }
}
export default paramValidation;