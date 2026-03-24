import { Router } from 'express';
import { registerController, loginController, verifyOtpController } from '../controllers/auth.controller';

const router = Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/verify-otp', verifyOtpController);

export default router;