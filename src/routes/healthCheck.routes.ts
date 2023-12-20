import { Request, Response, Router } from "express";
class HealthCheckRoutes {
  private router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = (): void  =>{
    this.router.get('/health', (req:Request, res:Response)=>{
        res.status(200).json({message : "everything is OK"});
    });
  }

  public getRouter = (): Router => {
    return this.router;
  }
}
export default HealthCheckRoutes;
