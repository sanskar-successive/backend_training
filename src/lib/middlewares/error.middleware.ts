import { NextFunction, Request, Response } from "express";
import SystemResponse from "../config/responseHandler";
import { HttpError } from "http-errors";

class ErrorHandler {
  // eslint-disable-next-line
  public handleError = (err: HttpError, req: Request, res: Response, next : NextFunction): void => {
    console.log("error handler chal rha hai");
    // res.status(err.status).json({ error: err.message });
    // res.status(res.statusCode).send(SystemResponse.error(err));
    SystemResponse.error(res, err);
  }
}
export default new ErrorHandler().handleError;
