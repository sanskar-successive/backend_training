import express from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
} from "../controllers/userController.js";

import {
  requestLimiter,
  logEvents,
  authenticateUser,
  customHeader,
  validateUser,
  queryValidation,
  getGeoLocation,
  dynamicValidation,
} from "../middlewares/index.js";

const router = express.Router();

router.use(dynamicValidation)

router.post('/login', (req, res)=>{
  res.send("in login route")
})

router.post('/register', (req, res)=>{
  res.send("in register route")
})


router.get(
  "/show",
  getGeoLocation,
  requestLimiter(5, 5),
  logEvents,
  authenticateUser,
  customHeader({
    custom_header_1: "custom_header_value_1",
    custom_header_2: "custom_header_value_2",
  }),
  queryValidation,
  getAllUsersController
);

router.get(
  "/show/:id",
  requestLimiter(5, 5),
  logEvents,
  authenticateUser,
  customHeader({
    custom_header_1: "custom_header_value_1",
    custom_header_2: "custom_header_value_2",
  }),
  getUserByIdController
);
router.post(
  "/create",
  requestLimiter(5, 5),
  logEvents,
  authenticateUser,
  validateUser,
  customHeader({
    custom_header_1: "custom_header_value_1",
    custom_header_2: "custom_header_value_2",
  }),
  createUserController
);

export default router;
