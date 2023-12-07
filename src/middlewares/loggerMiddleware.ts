import { NextFunction, Request, Response } from "express";

const logEvents = (req:Request, res:Response, next:NextFunction)=>{
    console.log(`${new Date()} <><> method=>${req.method} <><> URL=>${req.url}`);
    next();
}
export default logEvents;