import { Request, Response } from "express";

const asyncHandler = async (req:Request, res:Response) => {
  const promise = new Promise((resolve, reject) => {
    reject("Promise resolved");
    resolve("Promise rejected");
  });
  try {
    const response = await promise;
    res.status(200).json({ message: response });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

export default asyncHandler;