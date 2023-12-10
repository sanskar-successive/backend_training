
import express from 'express';
import BookController from './book.controller';
import dynamicValidationMiddleware from '../../lib/middlewares/dynamicValidation.middleware';
import authMiddleware from '../../lib/middlewares/auth.middleware';

const router = express.Router();

const bookController = new BookController();

router.use(authMiddleware);
router.use(dynamicValidationMiddleware);

router.get('/get', bookController.getAll);
router.get('/get/:bookId', bookController.getById);
router.post('/create', bookController.createNew);
router.patch('/update/:bookId', bookController.update);
router.delete('/delete/:bookId', bookController.delete);

export default router;