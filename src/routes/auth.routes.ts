
import { Router } from 'express';
import AuthController from '../controllers/auth.controller';

const router:Router = Router();

const authController = new AuthController();


router.post('/login', authController.login);
router.post('/register', authController.register);


export default router;





































// import { Router } from "express";
// import dynamicValidationMiddleware from "../middlewares/dynamicValidation.middleware.js";
// import AuthController from "../controllers/auth.controller.js";

// class AuthRoutes {
//   private router: Router = Router();
//   private controller: AuthController = new AuthController();

//   constructor() {
//     this.initializeMiddlewares();
//     this.initializeRoutes();
//   }

//   private initializeMiddlewares = () : void => {
//     this.router.use(dynamicValidationMiddleware);
//   }

//   private initializeRoutes = (): void  =>{
//     this.router.post('/login', this.controller.login.bind(this.controller));
//     this.router.post('/register', this.controller.register.bind(this.controller));
//   }

//   public getRouter = (): Router => {
//     return this.router;
//   }
// }

// export default AuthRoutes;
