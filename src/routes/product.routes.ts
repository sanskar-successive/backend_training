
import express from 'express';
import ProductController from '../controllers/product.controller.js';

const router = express.Router();

const productController = new ProductController();

router.get('/get', productController.getAllProducts);
router.post('/create', productController.createNewProduct);
router.patch('/update/:productId', productController.updateProduct);
router.delete('/delete/:productId', productController.deleteProduct);

export default router;






