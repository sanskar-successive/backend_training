var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from './routes/product.routes.js';
import DBConnection from "./config/dbConnection.js";
class Server {
    constructor() {
        this.config = () => __awaiter(this, void 0, void 0, function* () {
            this.app.use(express.json());
        });
        this.setRoutes = () => {
            this.app.use("/api/users", userRoutes);
            this.app.use("/api/products", productRoutes);
        };
        this.start = (PORT) => __awaiter(this, void 0, void 0, function* () {
            yield this.dbConnection.connectDB();
            this.app.listen(PORT, () => {
                console.log(`server running on PORT ${PORT}`);
            });
        });
        this.dbConnection = new DBConnection();
        this.app = express();
        this.config();
        this.setRoutes();
    }
}
export default Server;
// import express, { Express } from "express";
// import UserRoutes from "./routes/user.routes.js";
// import loggerMiddleware from "./middlewares/logger.middleware.js";
// import geoLocationMiddleware from "./middlewares/geoLocation.middleware.js";
// import errorMiddleware from "./middlewares/error.middleware.js";
// import AuthRoutes from "./routes/auth.routes.js";
// import HealthCheckRoutes from "./routes/healthCheck.routes.js";
// import notFoundMiddlware from "./middlewares/notFound.middlware.js";
// import DBConnection from "./db/dbConnection.js";
// class App {
//   private app: Express;
//   private dbConnection: DBConnection;
//   constructor() {
//     this.dbConnection = new DBConnection();
//     this.app = express();
//     this.config();
//     this.setRoutes();
//     this.setNotFound();
//     this.setErrorHandler();
//   }
//   private config = (): void => {
//     this.app.use(express.json());
//     this.dbConnection.connectDB();
//     this.app.use(loggerMiddleware);
//     this.app.use(geoLocationMiddleware);
//   };
//   private setRoutes = (): void => {
//     const userRoutes = new UserRoutes();
//     this.app.use("/api/users", userRoutes.getRouter());
//     const authRoutes = new AuthRoutes();
//     this.app.use("/api/auth", authRoutes.getRouter());
//     const healthCheckRoutes = new HealthCheckRoutes();
//     this.app.use("/api", healthCheckRoutes.getRouter());
//   };
//   private setNotFound = (): void => {
//     this.app.use(notFoundMiddlware);
//   };
//   private setErrorHandler = (): void => {
//     this.app.use(errorMiddleware);
//   };
//   public start = (port: number): void => {
//     this.app.listen(port, () => {
//       console.log(`server is running on port ${port}`);
//     });
//   };
// }
// export default App;
