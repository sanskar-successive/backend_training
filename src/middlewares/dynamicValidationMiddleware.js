import joi from "joi";
import CustomError from "../utils/errorClass.js";
import validationConfig from "../utils/validationConfig.js";

const dynamicValidation = (req, res, next) => {
  try {
    const path = req.url;
    const method = req.method;
    const key = `${path} ${method}`;
    console.log(key);
    if (Object.keys(validationConfig).includes(key)) {
      const schema = validationConfig[key];
      const toValidate = req.body;
      const { value, error } = schema.validate(toValidate,{abortEarly : false});
      if (error) {
        res.status(406).json(error);
        return;
      }
    }
    next();
  } catch (err) {
    next(new CustomError("internal server error", 500));
  }
};
export default dynamicValidation;
