import CustomError from "../utils/errorClass.js";
const queryValidation = (req, res, next) => {
  try{
    const query = req.query;
    if(!Object.keys(query).length){
      next();
      return;
    }
    if (isNaN(query.query1)) {
      next(new CustomError("not a numeric value", 406));
    } else {
      next();
    }
  }
  catch(err){
    next(new CustomError('Internal server error', 500))
  }
};
export default queryValidation;
