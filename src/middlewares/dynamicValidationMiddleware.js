import joi from "joi";
import CustomError from "../utils/errorClass.js";
import validationConfig from "../utils/validationConfig.js";

const dynamicValidation = (req, res, next) => {
  const path = req.url;
  console.log(path);
  const schema = validationConfig[path];

  const toValidate = req.body;

  const {value, error} = schema.validate(toValidate);

  if(error){
      res.send('Error occured during schema validation')
  }

  next();
};
export default dynamicValidation;
