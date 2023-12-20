import { Request, Response } from "express";
import UserService from "../services/user.service.js";
import IUser from "../interfaces/IUser.js";

class UserController{

  private userService : UserService;

  constructor(){
    this.userService = new UserService();
  }

  public getAllUsers = async (req : Request, res : Response) : Promise<void> => {
    try{
      const users : IUser[] | null = await this.userService.getAllUsers();
      res.status(200).json(users); 
    }
    catch(err){
      res.status(500).send(err);
    }    
  }

  public getUser = async (req : Request, res : Response) : Promise<void> => {
    try{
      const {userId} = req.params;
      const user : IUser | null = await this.userService.getUserById(userId);
      res.status(200).json(user);
    }
    catch(err){
      res.status(500).send(err);
    }    
  }

  public createNewUser = async (req : Request, res : Response) : Promise<void> => {
    try{
      const user : IUser = req.body;
      await this.userService.createUser(user);
      res.status(201).json({message:"user created successfully", user : user});
    }
    catch(err){
      res.status(500).send(err);
    }
  }

  public updateUser = async (req : Request, res : Response) : Promise<void> => {
    try{
      const {userId} = req.params;
      const updatedUser = req.body;
      await this.userService.updateUser(userId, updatedUser);
      res.status(200).json("user updated successfully");
    }
    catch(err){
      res.status(500).send(err);
    }
  }

  public deleteUser = async (req : Request, res : Response) : Promise<void> => {
    try{
      const {userId} = req.params;
      await this.userService.deleteUser(userId);
      res.status(200).json("user deleted successfully");
    }
    catch(err){
      res.status(500).send(err);
    }
    
  }
}
export default UserController;
