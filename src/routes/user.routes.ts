import express from 'express';
import UserController from '../controllers/user.controller.js';
import dynamicValidationMiddleware from '../middlewares/dynamicValidation.middleware.js';
const router = express.Router();

const userController = new UserController();

router.use(dynamicValidationMiddleware);

router.get('/get', userController.getAllUsers);
router.get('/get/:userId', userController.getUser);
router.post('/create', userController.createNewUser);
router.patch('/update/:userId', userController.updateUser);
router.delete('/delete/:userId', userController.deleteUser);

export default router;