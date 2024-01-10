
import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import dynamicValidationMiddleware from '../middlewares/dynamicValidation.middleware';

const router:Router = Router();

const authController = new AuthController();

router.use(dynamicValidationMiddleware);

router.post('/login', authController.login);

export default router;