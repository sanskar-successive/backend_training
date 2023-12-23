import express from "express";
import BookController from "./book.controller";
import multer from 'multer'

const router = express.Router();

const bookController = new BookController();

// router.use(authMiddleware);
// router.use(dynamicValidationMiddleware);



const upload = multer({dest : 'uploads/'});
router.get('/bulk-upload', upload.single('file'), bookController.bulkBookUpload);

router.get("/books", bookController.getAll);
router.get("/books/:bookId", bookController.getById);
router.post("/books", bookController.createNew);
router.patch("/books/:bookId", bookController.update);
router.delete("/books/:bookId", bookController.delete);

export default router;
