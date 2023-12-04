import { NextFunction, Request, Response } from "express";
import CreateError from "http-errors";

class AuthController {
  public login(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "in login route" });
    } catch (err) {
      next(CreateError(400, "something went wrong"));
    }
  }

  public register(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ message: "in register route" });
    } catch (err) {
      next(CreateError(400, "something went wrong"));
    }
  }
}
export default AuthController;
