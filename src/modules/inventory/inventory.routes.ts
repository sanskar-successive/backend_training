
import express from 'express';
import InventoryController from './inventory.controller';
import authMiddleware from '../../lib/middlewares/auth.middleware';
import dynamicValidationMiddleware from '../../lib/middlewares/dynamicValidation.middleware';
const router = express.Router();

const inventoryController = new InventoryController();

router.use(authMiddleware);
router.use(dynamicValidationMiddleware);

router.get('/get', inventoryController.getAll);
router.get('/get/:bookId', inventoryController.getByBookId);
router.patch('/update', inventoryController.updateInventory);
router.delete('/delete/:bookId', inventoryController.deleteByBookId);


export default router;