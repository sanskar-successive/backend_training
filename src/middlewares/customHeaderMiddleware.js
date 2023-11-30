import CustomError from "../utils/errorClass.js";

const customHeader = (custom_header) => {

  return (req, res, next) => {
    try {
      if (!Object.keys(custom_header).length) {
        next(new CustomError("nothing provided in header", 411));
      } else {
        res.set(custom_header);
        next();
      }
    } catch (err) {
        next(new CustomError("internal server error", 500))
    }
  };
};

export default customHeader;