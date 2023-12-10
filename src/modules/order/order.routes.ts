
import express from 'express';
import OrderController from './order.controller';
import authMiddleware from '../../lib/middlewares/auth.middleware';
import dynamicValidationMiddleware from '../../lib/middlewares/dynamicValidation.middleware';

const router = express.Router();

const orderController = new OrderController();

router.use(authMiddleware);
router.use(dynamicValidationMiddleware);

router.get('/get', orderController.getAllOrders);
router.post('/create', orderController.createNew);
router.get('/get/:customerId', orderController.getByCustomerId);

// router.patch('/update/:bookId', orderController.update);
// router.delete('/delete/:bookId', orderController.delete);

export default router;