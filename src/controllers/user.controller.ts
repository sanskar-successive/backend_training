import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service.js";
import IUser from "../interfaces/IUser.js";
import IProduct from "../interfaces/IProduct.js";
import ProductService from "../services/product.service.js";
import createHttpError from "http-errors";

class UserController{

  private userService : UserService;
  private productService : ProductService;

  constructor(){
    this.userService = new UserService();
    this.productService = new ProductService();
  }

  public getAllUsers = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try{
      const users : IUser[] | null = await this.userService.getAllUsers();
      if(users) res.status(200).json(users);
      else next(createHttpError(403, "no users found"));
    }
    catch(err){
      next(createHttpError(500, "internal server error (getting all users)"));
    }    
  }

  public getUser = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try{
      const {userId} = req.params;
      const user : IUser | null = await this.userService.getUserById(userId);
      if(user) res.status(200).json(user);
      else next(createHttpError(403, "no user found"));
    }
    catch(err){
      next(createHttpError(500, "internal server error (getting the user)"));
    }    
  }

  public createNewUser = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try{
      const user : IUser = req.body;
      await this.userService.createUser(user);
      res.status(201).json({message:"user created successfully", user : user});
    }
    catch(err){
      next(createHttpError(500, "internal server error (creating the user)"));
    }
  }

  public updateUser = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try{
      const {userId} = req.params;
      const updatedUser = req.body;
      await this.userService.updateUser(userId, updatedUser);
      res.json("user updated successfully");
    }
    catch(err){
      next(createHttpError(500, "internal server error (updating the user)"));
    }
  }

  public deleteUser = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try{
      const {userId} = req.params;
      await this.userService.deleteUser(userId);
      res.json("user deleted successfully");
    }
    catch(err){
      next(createHttpError(500, "internal server error (deleting the user)"));
    }
    
  }

  public getAllProducts = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try{
      const {userId} = req.params;
      const userProducts : IProduct[] | null = await this.productService.getProductsByUserId(userId)
      if(userProducts) res.status(200).json(userProducts);
      else next(createHttpError(403, "no products found"));
    }
    catch(err){
      next(createHttpError(500, "internal server error (getting user products)"));
    }
  }
}
export default UserController;



















// import { NextFunction, Request, Response } from "express";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import users from "../utils/data/apiData.json" assert { type: "json" };
// import CreateError from "http-errors";
// import UserService from "../services/user.service";




// class UserController {
//   public getAllUsers = (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ): void => {
//     try {
//       res.status(200).json(users);
//     } catch (err) {
//       next(CreateError(400, "something went wrong"));
//     }
//   };

//   public getUserById = (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ): void => {
//     try {
//       const { id } = req.params;
//       const user = users.find((user) => user.id === parseInt(id));
//       if (user) res.json(user);
//       else res.status(404).json({ error: "user not found" });
//     } catch (err) {
//       next(CreateError(400, "something went wrong"));
//     }
//   };

//   public createUser = (
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ): void => {
//     try {
//       const newUser = req.body;
//       const __filename = fileURLToPath(import.meta.url);
//       const __dirname = path.dirname(__filename);
//       const filePath = path.join(__dirname, "../utils/data/apiData.json");
//       users.push(newUser);
//       fs.writeFileSync(filePath, JSON.stringify(users));
//       res
//         .status(201)
//         .json({ message: "User created successfully", user: newUser });
//     } catch (err) {
//       next(CreateError(400, "something went wrong"));
//     }
//   };
// }

// export default UserController;
