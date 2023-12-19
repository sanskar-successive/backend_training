"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnection_1 = __importDefault(require("./lib/config/dbConnection"));
const router_1 = __importDefault(require("./router"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const error_middleware_1 = __importDefault(require("./lib/middlewares/error.middleware"));
const notFound_middlware_1 = __importDefault(require("./lib/middlewares/notFound.middlware"));
const logger_middleware_1 = __importDefault(require("./lib/middlewares/logger.middleware"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.config = () => __awaiter(this, void 0, void 0, function* () {
            this.app.use((0, cors_1.default)());
            this.app.use(express_1.default.json());
            this.app.use((0, cookie_parser_1.default)());
            this.app.use(logger_middleware_1.default);
        });
        this.setRoutes = () => {
            this.app.use(router_1.default);
        };
        this.setNotFound = () => {
            this.app.use(notFound_middlware_1.default);
        };
        this.setErrorHandler = () => {
            this.app.use(error_middleware_1.default);
        };
        this.start = (PORT) => __awaiter(this, void 0, void 0, function* () {
            yield this.dbConnection.connectDB();
            this.app.listen(PORT, () => {
                console.log(`server running on PORT ${PORT}`);
            });
        });
        this.dbConnection = new dbConnection_1.default();
        this.app = (0, express_1.default)();
        this.config();
        this.setRoutes();
        this.setNotFound();
        this.setErrorHandler();
    }
}
exports.default = Server;
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
