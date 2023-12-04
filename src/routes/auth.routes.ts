import { Router } from "express";
import dynamicValidationMiddleware from "../middlewares/dynamicValidation.middleware.js";
import AuthController from "../controllers/auth.controller.js";

class AuthRoutes {
  private router: Router = Router();
  private controller: AuthController = new AuthController();

  constructor() {
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares = () : void => {
    this.router.use(dynamicValidationMiddleware);
  }

  private initializeRoutes = (): void  =>{
    this.router.post('/login', this.controller.login.bind(this.controller));
    this.router.post('/register', this.controller.register.bind(this.controller));
  }

  public getRouter = (): Router => {
    return this.router;
  }
}

export default AuthRoutes;
