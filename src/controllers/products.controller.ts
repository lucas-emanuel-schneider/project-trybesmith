import { Request, Response } from 'express';
import productService from '../services/products.service';

const singUpProduct = async (req: Request, res: Response) => {
  const { message } = await productService.singUpProduct(req.body);
  return res.status(201).json(message);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await productService.getAllProducts();
  return res.status(200).json(result);
};

export default { singUpProduct, getAllProducts };