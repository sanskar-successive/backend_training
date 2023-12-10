import { NextFunction, Request, Response } from "express";
import CreateError from 'http-errors';

class NotFound{

    public pageNotFound = (req:Request, res:Response, next:NextFunction) : void => {
        next(CreateError(404, 'page not found'));
    }
}

export default new NotFound().pageNotFound;