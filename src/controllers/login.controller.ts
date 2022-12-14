import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const { type, message } = await loginService.login(req.body);
  if (type) return res.status(401).json({ message });
  return res.status(200).json({ token: message });
};

export default { login };