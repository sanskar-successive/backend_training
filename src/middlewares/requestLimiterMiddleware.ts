import { NextFunction, Request, Response } from "express";

const requestLimiter = (reqLimit:number, timeLimit:number) => {
  let initReqTime:number, currReqTime:number;
  let countReq = 0;
  return (req:Request, res:Response, next:NextFunction) => {
    if (!countReq) {
      initReqTime = new Date().getSeconds();
      currReqTime = new Date().getSeconds();
    } else {
      currReqTime = new Date().getSeconds();
      if (currReqTime < initReqTime) currReqTime += 59;
    }
    if (countReq < reqLimit && currReqTime <= initReqTime + timeLimit) {
      countReq++;
      next();
    } else if (currReqTime > initReqTime + timeLimit) {
      countReq = 0;
      next();
    } else {
      res.status(429).json({ message: "too many requests " });
    }
  };
};

export default requestLimiter;
