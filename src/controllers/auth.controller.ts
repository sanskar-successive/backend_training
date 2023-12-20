import { Request, Response } from "express";
import UserService from "../services/user.service";
import jwt from 'jsonwebtoken';
import ILogin from "../interfaces/ILogin";

class AuthController {

  private userService : UserService;

  constructor(){
    this.userService = new UserService();
  }

  public login = (req: Request, res: Response) =>{
    try {
      const userToLogin : ILogin = req.body;
      const user = this.userService.getUserByEmail(userToLogin.email);
      console.log(user);
      const token:string = jwt.sign(userToLogin,"123");
      res.cookie("authToken", token);
      res.status(200).json({ message: "login successful", token : token });
    } catch (err) {
      res.status(500).json({message : "internal server error(in login route)"})
    }
  }
}
export default AuthController;
