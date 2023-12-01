import express, { Request, Response } from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
} from "../controllers/userController.js";
import {
  requestLimiter,
  authenticateUser,
  customHeader,
  validateUser,
  queryValidation,
  getGeoLocation,
  dynamicValidation,
} from "../middlewares/index.js";

const router = express.Router();

// router.use(dynamicValidation)

// router.post('/login', (req:Request, res:Response)=>{
//   res.send("in login route")
// })
// router.post('/register', (req:Request, res:Response)=>{
//   res.send("in register route")
// })


router.use(authenticateUser);
router.use(requestLimiter(5, 5));

router.get(
  "/show",
  getGeoLocation,
  customHeader({
    "X-custom_header_get_1": "custom_header_value_1",
    "X-custom_header_get_2": "custom_header_value_2",
  }),
  queryValidation,
  getAllUsersController
);
router.get(
  "/show/:id",
  customHeader({
    "X-custom_header_getByID_1": "custom_header_value_1",
    "X-custom_header_getByID_2": "custom_header_value_2",
  }),
  getUserByIdController
);
router.post(
  "/create",
  validateUser,
  customHeader({
    "X-custom_header_post_1": "custom_header_value_1",
    "X-custom_header_post_2": "custom_header_value_2",
  }),
  createUserController
);

export default router;
