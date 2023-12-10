import { Request, Response } from "express";
import { HttpError } from "http-errors";

class ErrorHandler {
  public handleError = (err: HttpError, req: Request, res: Response): void => {
    console.log("error handler chal rha hai class wala");
    res.status(err.status).json({ error: err.message });
  }
}
export default new ErrorHandler().handleError;
