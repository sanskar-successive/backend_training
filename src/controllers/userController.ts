import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import users from "../utils/data/apiData.json" assert { type: "json" };
import { Request, Response } from "express";

export const getAllUsersController = (req:Request, res:Response) => {
  return res.status(200).json(users);
};

export const getUserByIdController = (req:Request, res:Response) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) return res.json(user);
  return res.status(404).json({ error: "user not found" });
};

export const createUserController = (req:Request, res:Response) => {
  const newUser = req.body;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "../utils/data/apiData.json");
  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users));
  return res
    .status(201)
    .json({ message: "User created successfully", user: newUser });
};
