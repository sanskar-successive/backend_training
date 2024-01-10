import validationConfig from "../utils/validationConfig.js";
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
      res.status(500).json({message : "internal server error in dynamic validation middleware"})
    }
  };
}

export default new DynamicValidationMiddleware().dynamicValidation;
