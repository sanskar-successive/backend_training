import express from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
} from "../controllers/userController.js";
import authenticateUser from "../middlewares/authMiddleware.js";
import validateUser from "../middlewares/validationMiddleware.js";

const router = express.Router();
router.get("/show", authenticateUser, getAllUsersController);
router.get("/show/:id",authenticateUser, getUserByIdController);
router.post("/create", authenticateUser,validateUser, createUserController);

export default router;
