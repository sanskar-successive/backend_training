// import { userSchema } from "../utils/schema/userSchema.js";
// import CreateError from 'http-errors';
// import { NextFunction, Request, Response } from "express";

// class ValidationMiddleware{
//     public validateUser = (req:Request, res:Response, next:NextFunction) : void =>{
//         try {
//           const user = req.body;
//           if(!Object.keys(user).length){
//             next(CreateError(411, 'user is empty'))
//             return;
//           }
//           const { error } = userSchema.validate(user, {abortEarly : false});
//           if (error) {
//             res.status(406).json(error)
//           }
//           else
//             next();
//         } catch (err) {
//           next(CreateError(500, 'internal server error(validation middleware)'))
//         }
//       };
// }

// export default new ValidationMiddleware().validateUser;


