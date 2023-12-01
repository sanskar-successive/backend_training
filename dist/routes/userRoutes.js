import express from "express";
import { createUserController, getAllUsersController, getUserByIdController, } from "../controllers/userController.js";
import { requestLimiter, authenticateUser, customHeader, validateUser, queryValidation, getGeoLocation, paramValidation, } from "../middlewares/index.js";
import asyncHandler from "../controllers/asyncController.js";
const router = express.Router();
router.get("/async", asyncHandler);
router.use(authenticateUser);
router.use(requestLimiter(5, 5));
router.get("/show", getGeoLocation, customHeader({
    "X-custom_header_get_1": "custom_header_value_1",
    "X-custom_header_get_2": "custom_header_value_2",
}), queryValidation, getAllUsersController);
router.get("/show/:id", getGeoLocation, paramValidation, customHeader({
    "X-custom_header_getByID_1": "custom_header_value_1",
    "X-custom_header_getByID_2": "custom_header_value_2",
}), getUserByIdController);
router.post("/create", validateUser, customHeader({
    "X-custom_header_post_1": "custom_header_value_1",
    "X-custom_header_post_2": "custom_header_value_2",
}), createUserController);
export default router;
