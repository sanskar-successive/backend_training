import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("error handler chal rha hai");
  return res.status(err.status || 500).json({ error: err.message || "internal server error" });
};
export default errorHandler;
