import { NextFunction, Request, Response } from 'express';
import schema from './schemas';

export default (req: Request, res: Response, next: NextFunction): Response | void => {
  const user = req.body;
  const { error } = schema.loginValidation.validate(user);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};