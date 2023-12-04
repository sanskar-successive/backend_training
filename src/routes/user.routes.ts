import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import requestLimiterMiddleware from "../middlewares/requestLimiter.middleware.js";
import CustomHeaderMiddleware from "../middlewares/customHeader.middleware.js";
import validationMiddleware from "../middlewares/validation.middleware.js";
import queryValidationMiddleware from "../middlewares/queryValidation.middleware.js";

class UserRoutes {
  private router: Router = Router();
  private controller: UserController = new UserController();

  constructor() {
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares(): void {
    // this.router.use(requestLimiterMiddleware);
    this.router.use(authMiddleware);
  }

  private initializeRoutes(): void {
    this.router.get(
      "/show",
      queryValidationMiddleware,
      new CustomHeaderMiddleware({
        "X-custom_header_get_1": "custom_header_value_1",
        "X-custom_header_get_2": "custom_header_value_2",
      }).customHeader,
      this.controller.getAllUsers.bind(this.controller)
    );

    this.router.post(
      "/create",
      validationMiddleware,
      new CustomHeaderMiddleware({
        "X-custom_header_get_1": "custom_header_value_1",
        "X-custom_header_get_2": "custom_header_value_2",
      }).customHeader,
      this.controller.createUser.bind(this.controller)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}

export default UserRoutes;
