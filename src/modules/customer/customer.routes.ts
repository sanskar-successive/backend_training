
import express from 'express';
import CustomerController from './customer.controller';
import dynamicValidationMiddleware from '../../lib/middlewares/dynamicValidation.middleware';
import authMiddleware from '../../lib/middlewares/auth.middleware';
const router = express.Router();

const customerController = new CustomerController();

router.use(dynamicValidationMiddleware);

router.get('/get', authMiddleware, customerController.getAll);
router.get('/get/:customerId', authMiddleware, customerController.getById);
router.post('/create', customerController.createNew);
router.patch('/update/:customerId', authMiddleware, customerController.update);
router.delete('/delete/:customerId', authMiddleware, customerController.delete);
router.post('/login', customerController.login);


export default router;