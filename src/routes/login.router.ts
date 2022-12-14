import { Router } from 'express';
import loginValidation from '../middlewares/loginValidation';
import loginController from '../controllers/login.controller';

const router = Router();

router.post('/', loginValidation, loginController.login);

export default router;