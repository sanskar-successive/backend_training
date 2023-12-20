import validationConfig from "../utils/validationConfig.js";
import CreateError from "http-errors";
import { NextFunction, Request, Response } from "express";
class DynamicValidationMiddleware {
  public dynamicValidation = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const path = req.url;
      const method = req.method;
      const key = `${path.substring(1)} ${method}`;
      console.log(key);
      if (Object.keys(validationConfig).includes(key)) {
        const schema = validationConfig[key];
        const toValidate = req.body;
        const { error } = schema.validate(toValidate, { abortEarly: false });
        if (error) {
          res.status(406).json(error);
          return;
        }
      }
      next();
    } catch (err) {
      next(
        CreateError(500, "internal server error(dynamic validation middleware)")
      );
    }
  };
}

export default new DynamicValidationMiddleware().dynamicValidation;
