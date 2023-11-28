import express from "express";
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

const asyncHandler = async (req, res) => {
  const promise = new Promise((resolve, reject) => {
    reject("Promise nhi nibha paya");
    resolve("Promise pura kr diya");
  });
  try {
    const response = await promise;
    res.status(200).json({ message: response });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

router.use("/async", asyncHandler);

router.use(dynamicValidation);

router.post("/login", (req, res) => {
  res.send("in login route");
});
router.post("/register", (req, res) => {
  res.send("in register route");
});

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
