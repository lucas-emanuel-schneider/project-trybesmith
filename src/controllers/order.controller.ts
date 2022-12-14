import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response) => {
  const { message } = await orderService.getAllOrders();
  return res.status(200).json(message);
};

export default { getAllOrders };