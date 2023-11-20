import express from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
} from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/show", getAllUsersController);
router.get("/show/:id", getUserByIdController);
router.post("/create", createUserController);

export default router;
