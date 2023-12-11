import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
class ErrorHandler {
  public handleError = (
    err: HttpError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    res.status(err.status).json({ error: err.message });
  };
}
export default new ErrorHandler().handleError;
