import jwt from "jsonwebtoken";
import CustomError from "../utils/errorClass.js";

const authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      const err = new CustomError("token not provided", 403);
      next(err);
    } else {
      const decodedUser = jwt.verify(token, "123");
      req.user = decodedUser;
      next();
    }
  } catch (err) {
    err = new CustomError("invalid token", 401);
    next(err);
  }
};

export default authenticateUser;
