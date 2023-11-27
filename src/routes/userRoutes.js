import express from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
} from "../controllers/userController.js";

import {requestLimiter, logEvents, authenticateUser, customHeader} from '../middlewares/index.js'


const router = express.Router();
router.get(
  "/show",
  requestLimiter(5, 5),
  logEvents,
  authenticateUser,
  customHeader({
    'custom_header_1' : "custom_header_value_1",
    'custom_header_2' : "custom_header_value_2",
  }),
  getAllUsersController
);
router.get(
  "/show/:id",
  requestLimiter(5, 5),
  logEvents,
  authenticateUser,
  customHeader({
    'custom_header_1' : "custom_header_value_1",
    'custom_header_2' : "custom_header_value_2",
  }),
  getUserByIdController
);
router.post(
  "/create",
  requestLimiter(5, 5),
  logEvents,
  authenticateUser,
  customHeader({
    'custom_header_1' : "custom_header_value_1",
    'custom_header_2' : "custom_header_value_2",
  }),
  createUserController
);

export default router;
