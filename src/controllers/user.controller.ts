import { Request, Response } from 'express';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const { message } = await userService.createUser(req.body);
  return res.status(201).json({ token: message });
};

export default { createUser };