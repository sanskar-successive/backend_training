import { NextFunction, Request, Response } from "express";

class LoggerMiddleware {
  public logEvents(req: Request, res: Response, next: NextFunction): void {
    console.log(
      `${new Date()} <><> method=>${req.method} <><> URL=>${req.url}`
    );
    next();
  }
}
export default new LoggerMiddleware().logEvents;
