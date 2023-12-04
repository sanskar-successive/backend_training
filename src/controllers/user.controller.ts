import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import users from "../utils/data/apiData.json" assert { type: "json" };
import CreateError from "http-errors";

class UserController {
  public getAllUsers = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      res.status(200).json(users);
    } catch (err) {
      next(CreateError(400, "something went wrong"));
    }
  };

  public getUserById = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const { id } = req.params;
      const user = users.find((user) => user.id === parseInt(id));
      if (user) res.json(user);
      else res.status(404).json({ error: "user not found" });
    } catch (err) {
      next(CreateError(400, "something went wrong"));
    }
  };

  public createUser = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    try {
      const newUser = req.body;
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const filePath = path.join(__dirname, "../utils/data/apiData.json");
      users.push(newUser);
      fs.writeFileSync(filePath, JSON.stringify(users));
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (err) {
      next(CreateError(400, "something went wrong"));
    }
  };
}

export default UserController;
