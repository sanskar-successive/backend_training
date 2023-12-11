import { Request, Response } from "express";
class AsyncController{
  public asyncHandler = async (req:Request, res:Response) => {
    const promise = new Promise((resolve, reject) => {
      reject("Promise rejected");
      resolve("Promise resolved");
    });
    try {
      const response = await promise;
      res.status(200).json({ message: response });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };
}
export default new AsyncController().asyncHandler;