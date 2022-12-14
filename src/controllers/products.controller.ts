import { Request, Response } from 'express';
import userService from '../services/products.service';

const singUpProduct = async (req: Request, res: Response) => {
  const { message } = await userService.singUpProduct(req.body);
  return res.status(201).json(message);
};

export default { singUpProduct };