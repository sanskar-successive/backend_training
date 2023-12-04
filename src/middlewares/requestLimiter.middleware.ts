import { NextFunction, Request, Response } from "express";
import CreateError from "http-errors";

class RequestLimiterMiddleware {
  private initReqTime: number;
  private currReqTime: number;
  private countReq: number;
  private reqLimit : number;
  private timeLimit :number;

  constructor() {
    this.initReqTime = 0;
    this.currReqTime = 0;
    this.countReq = 0;
    this.reqLimit = 5;
    this.timeLimit = 5;
  }

  public requestLimiter = (req: Request, res: Response, next: NextFunction): void =>{

    try {
      if (!this.countReq) {
        this.initReqTime = new Date().getSeconds();
        this.currReqTime = new Date().getSeconds();
      } else {
        this.currReqTime = new Date().getSeconds();
        if (this.currReqTime < this.initReqTime) this.currReqTime += 59;
      }
      if (
        this.countReq < this.reqLimit &&
        this.currReqTime <= this.initReqTime + this.timeLimit
      ) {
        this.countReq++;
        next();
      } else if (this.currReqTime > this.initReqTime + this.timeLimit) {
        this.countReq = 0;
        next();
      } else {
        res.status(429).json({ message: "Too many requests" });
      }
    } catch (err) {
      next(CreateError(500, "internal server error(request limiter middleware)"));
    }
  }
}

export default RequestLimiterMiddleware;
