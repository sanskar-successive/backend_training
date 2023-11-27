import CustomError from "../utils/errorClass.js";

export const customHeader = (custom_header) => {

  return (req, res, next) => {
    try {
      if (Object.keys(custom_header).length===0) {
        const err = new CustomError("nothing provided in header", 411);
        next(err);
      } else {
        res.set(custom_header);
        next();
      }
    } catch (err) {
        err = new CustomError("internal server error", 500);
        next(err)
    }
  };
};
