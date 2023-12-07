import express from "express";
import userRoutes from './routes/user.routes.js';
import DBConnection from "./db/dbConnection.js";
class App {
    constructor() {
        this.config = () => {
            this.dbConnection.connectDB();
            this.app.use(express.json());
        };
        this.setRoutes = () => {
            this.app.use("/api/users", userRoutes);
        };
        this.start = (port) => {
            this.app.listen(port, () => {
                console.log(`server is running on port ${port}`);
            });
        };
        this.dbConnection = new DBConnection();
        this.app = express();
        this.config();
        this.setRoutes();
    }
}
export default App;
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
