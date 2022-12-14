import jwt from 'jsonwebtoken';
import { TUser } from '../Types/types';

const secret = process.env.JWT_SECRET || 'seuSegredoAqui';

const jwtConfig: object = {
  algorithm: 'HS256',
  expiresIn: '3d',
};

const createToken = (userWithdoutPassword: TUser) => {
  const token = jwt.sign({ userWithdoutPassword }, secret, jwtConfig);
  return token;
};

const verifyToken = (authorization: string) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return { type: null, message: payload };
  } catch (error) {
    return { type: 'error', message: 'Expired or invalid token' };
  }
};

export { createToken, verifyToken };