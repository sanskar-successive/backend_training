import { NextFunction, Request, Response } from "express";
import CreateError from "http-errors";

class ParamValidationMiddleware {
  public paramValidation(req: Request, res: Response, next: NextFunction): void {
    try {
      const { id } = req.params;
      if (isNaN(Number(id))) {
        next(CreateError(406, "not a valid param"));
      } else {
        next();
      }
    } catch (err) {
      next(CreateError(500, "internal server error(param validation middleware)"));
    }
  }
}
export default new ParamValidationMiddleware().paramValidation;
