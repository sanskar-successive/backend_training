
import express from 'express';
import UserController from './user.controller';
import authMiddleware from '../../lib/middlewares/auth.middleware';
const router = express.Router();

const userController = new UserController();

// router.use(dynamicValidationMiddleware);

router.post('/', userController.createNew);
router.get('/', authMiddleware, userController.getAll);
router.get('/:userId', authMiddleware, userController.getById);
router.patch('/:userId', authMiddleware, userController.update);
router.delete('/:userId', authMiddleware, userController.delete);
router.post('/login', userController.login);


export default router;