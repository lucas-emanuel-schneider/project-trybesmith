import { Router } from 'express';
import productController from '../controllers/products.controller';

const router = Router();

router.post('/', productController.singUpProduct);

export default router;