import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import validationMiddleware from "../middlewares/validation.middleware.js";
import queryValidationMiddleware from "../middlewares/queryValidation.middleware.js";
import RequestLimiterMiddleware from "../middlewares/requestLimiter.middleware.js";
import CustomHeaderMiddleware from "../middlewares/customHeader.middleware.js";
class UserRoutes {
  private router: Router = Router();
  private controller: UserController = new UserController();
  private requestLimiterMiddleware = new RequestLimiterMiddleware();

  constructor() {
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares = (): void => {
    this.router.use(this.requestLimiterMiddleware.requestLimiter);
    this.router.use(authMiddleware);
  };

  private initializeRoutes = (): void => {
    this.router.get(
      "/show",
      new CustomHeaderMiddleware({
        "X-custom_header_get_1": "custom_header_value_1",
        "X-custom_header_get_2": "custom_header_value_2",
      }).setCustomHeader,
      queryValidationMiddleware,
      this.controller.getAllUsers
    );

    this.router.post(
      "/create",
      validationMiddleware,
      new CustomHeaderMiddleware({
        "X-custom_header_get_1": "custom_header_value_1",
        "X-custom_header_get_2": "custom_header_value_2",
      }).setCustomHeader,
      this.controller.createUser
    );
  };

  public getRouter = (): Router => {
    return this.router;
  };
}

export default UserRoutes;
