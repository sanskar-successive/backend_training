import joi from "joi";
import CustomError from "../utils/errorClass.js";
import validationConfig from "../utils/validationConfig.js";

const dynamicValidation = (req, res, next) => {
  try {
    const path = req.url;
    if (Object.keys(validationConfig).includes(path)) {
      const schema = validationConfig[path];
      const toValidate = req.body;
      if (!Object.keys(toValidate).length) {
        next(new CustomError("got an empty object", 411));
        return;
      }
      const { value, error } = schema.validate(toValidate);
      if (error) {
        next(new CustomError("Not acceptable", 406));
        return;
      }
    }
    next();
  } catch (err) {
    next(new CustomError("internal server error", 500));
  }
};
export default dynamicValidation;
