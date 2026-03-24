import { Request, Response } from 'express';
import { register, login, verifyOtp } from '../services/auth.service';
 
// =====================
// REGISTER
// =====================
export async function registerController(req: Request, res: Response): Promise<void> {
  try {
    const message = await register(req.body);
    res.status(201).json({ success: true, message });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}
 
// =====================
// LOGIN
// =====================
export async function loginController(req: Request, res: Response): Promise<void> {
  try {
    const message = await login(req.body);
    res.status(200).json({ success: true, message });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}
 
// =====================
// VERIFY OTP
// =====================
export async function verifyOtpController(req: Request, res: Response): Promise<void> {
  try {
    const token = await verifyOtp(req.body);
    res.status(200).json({ success: true, token });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
}
 