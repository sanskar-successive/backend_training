import CustomError from "../utils/errorClass.js";

const queryValidation = (req, res, next) => {
  const query = req.query;

  if(!Object.keys(query).length){
    next();
  }

  if (isNaN(query.query1)) {
    const err = new CustomError("not a numeric value", 406);
    next(err);
  } else {
    next();
  }
};

export default queryValidation;
