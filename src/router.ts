import express from 'express';
import bookRoutes from './modules/book/book.routes'
import customerRoutes from './modules/customer/customer.routes';
import orderRoutes from './modules/order/order.routes';
import inventoryRoutes from './modules/inventory/inventory.routes';

const router = express.Router();

router.use('/api/books', bookRoutes)
router.use('/api/customers', customerRoutes);
router.use('/api/orders', orderRoutes);
router.use('/api/inventory', inventoryRoutes);


export default router;