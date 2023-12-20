import express, { Application } from "express";
import userRoutes from "./routes/user.routes.js";
import DBConnection from "./config/dbConnection.js";
class Server {
  private app: Application;
  private dbConnection: DBConnection;

  constructor() {
    this.dbConnection = new DBConnection();
    this.app = express();
    this.config();
    this.setRoutes();
  }
  private config = async (): Promise<void> => {
    this.app.use(express.json());
  };

  private setRoutes = (): void => {
    this.app.use("/api/users", userRoutes);
  };

  public start = async (PORT: number) => {
    await this.dbConnection.connectDB();
    this.app.listen(PORT, () => {
      console.log(`server running on PORT ${PORT}`);
    });
  };
}

export default Server;
