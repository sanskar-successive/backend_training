import { NextFunction, Request, Response } from "express";
import CreateError from "http-errors";
import UserService from "../services/user.service";
import jwt from 'jsonwebtoken';
import IUser from "../interfaces/IUser";
import ILogin from "../interfaces/ILogin";

class AuthController {

  private userService : UserService;

  constructor(){
    this.userService = new UserService();
  }

  public login = (req: Request, res: Response, next: NextFunction) =>{
    try {
      const userToLogin : ILogin = req.body;
      const user = this.userService.getUserByEmail(userToLogin.email);
      console.log(user);
      const token:string = jwt.sign(userToLogin,"123");
      res.cookie("authToken", token);
      res.status(200).json({ message: "login successful", token : token });
    } catch (err) {
      next(CreateError(400, "something went wrong"));
    }
  }

  public register = async (req: Request, res: Response, next: NextFunction) =>{
    try {
      const user : IUser = req.body;
      await this.userService.createUser(user);
      return res.status(200).json({ message: "in register route" });
    } catch (err) {
      next(CreateError(400, "something went wrong"));
    }
  }
}
export default AuthController;
