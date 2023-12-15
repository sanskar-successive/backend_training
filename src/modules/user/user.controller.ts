import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import ILogin from "./entities/ILogin";
import UserService from "./user.service";
import { IUser } from "./entities/IUser";
import SystemResponse from "../../lib/config/responseHandler";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getAll = async (req: Request, res: Response, next : NextFunction): Promise<void> => {
    try {
      const users: IUser[] | null = await this.userService.getAll();
      // res.send(SystemResponse.success('fetched users', 200, users));
      SystemResponse.success(res, "user created successfully", users);
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next : NextFunction): Promise<void> => {
    try {
      const { userId } = req.params;
      const user: IUser | null = await this.userService.getById(userId);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  public createNew = async (req: Request, res: Response, next : NextFunction): Promise<void> => {
    try {
      const user: IUser | null = await this.userService.createNew(req.body);
      // res.status(201).json({ message: "user created successfully", user });
      // res.send(SystemResponse.success('user created successfully', 201, user));
      SystemResponse.success(res, "user created successfully", user);

    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next : NextFunction): Promise<void> => {
    try {
      const { userId } = req.params;
      const updatedUserData = req.body;
      const updatedUser: IUser | null = await this.userService.update(
        userId,
        updatedUserData
      );
      res.json({ message: "user updated successfully", updatedUser });
      // res.send(SystemResponse.success("user updated successfully", 201, updatedUser));
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next : NextFunction): Promise<void> => {
    try {
      const { userId } = req.params;
      const deletedUser: IUser | null = await this.userService.delete(userId);
      res.json({ message: "user deleted successfully", deletedUser });
      // res.send(SystemResponse.success("user deleted successfully", 201, deletedUser));
    } catch (error) {
      next(error);
    }
  };

  public login = async (req: Request, res: Response, next : NextFunction): Promise<void> => {
    try {
      const userDetails: ILogin = req.body;
      const userInDb: IUser | null = await this.userService.getByEmail(
        userDetails.email
      );

      if (!userInDb)
        res.status(403).json({ message: "user not found (invalid email" });
      else if (userInDb.password !== userDetails.password) {
        res.status(403).json({ message: "user invalid password" });
      } else {
        const token: string = jwt.sign(userDetails, "123");
        res.cookie("authToken", token);
        res.status(201).json({ message: "user logged in successfully" });
        // res.send(SystemResponse.success('user logged in successfully', 200, userInDb));
      }
    } catch (error) {
      next(error);
    }
  };
}
export default UserController;
