import CreateError from "http-errors";
import { NextFunction, Request, Response } from "express";
class CustomHeaderMiddleware {
  private custom_header: object;

  constructor(custom_header: object) {
    this.custom_header = custom_header;
  }
  public setCustomHeader = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      if (!Object.keys(this.custom_header).length) {
        next(CreateError(411, "header is not provided"));
        next();
      } else {
        res.set(this.custom_header);
        next();
      }
    } catch (err) {
      next(CreateError(500, "internal server error(custom header middleware)"));
    }
  };
}
export default CustomHeaderMiddleware;
