import express, {Express} from "express";
import UserRoutes from "./routes/user.routes.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";
import geoLocationMiddleware from "./middlewares/geoLocation.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import AuthRoutes from "./routes/auth.routes.js";
class App {
  private app : Express;

  constructor(){
    this.app = express();
    this.config();
    this.setRoutes();
    this.setErrorHandler();
  }
  private config = (): void => {
    this.app.use(express.json());
    this.app.use(loggerMiddleware);
    this.app.use(geoLocationMiddleware);
  }

  private setRoutes = ():void=>{
    const userRoutes = new UserRoutes();
    this.app.use('/api/users', userRoutes.getRouter());
    const authRoutes = new AuthRoutes();
    this.app.use('/api/auth', authRoutes.getRouter());
  }

  private setErrorHandler = ():void=>{
    this.app.use(errorMiddleware);
  }

  public start = (port:number):void=>{
    this.app.listen(port, ()=>{
      console.log(`server is running on port ${port}`);
    });
  }
}

export default App;

































// import express from "express";

// import { errorHandler, logEvents } from "./middlewares/index.js";
// import userRoutes from "./routes/userRoutes.js";
// import authRoutes from "./routes/authRoutes.js";

// const app = express();
// const PORT = 5000;
// app.use(express.json());
// app.use(logEvents);
// app.use("/api/users", userRoutes);
// app.use('/api/auth', authRoutes);
// app.use((req,res,next)=>{
//   res.json("page not found")
// })
// app.use(errorHandler);

// app.listen(PORT, () => {
//   console.log(`server running on port ${PORT}`);
// });
