import express from 'express';
import { dynamicValidation } from '../middlewares/index.js';
const router = express.Router();
router.use(dynamicValidation);
router.post('/login', (req, res) => {
    res.send("in login route");
});
router.post('/register', (req, res) => {
    res.send("in register route");
});
export default router;
