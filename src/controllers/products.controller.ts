import { Request, Response } from 'express';
import userService from '../services/products.service';

const singUpProduct = async (req: Request, res: Response) => {
  const { message } = await userService.singUpProduct(req.body);
  return res.status(201).json(message);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await userService.getAllProducts();
  return res.status(200).json(result);
};

export default { singUpProduct, getAllProducts };