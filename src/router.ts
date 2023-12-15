import express from 'express';
import bookRoutes from './modules/book/book.routes'
import userRoutes from './modules/user/user.routes'

const router = express.Router();

router.use('/api/books', bookRoutes)
router.use('/api/users', userRoutes);


export default router;