import userModel from '../models/user.model';
import { TUser } from '../Types/types';
import { createToken } from '../auth/jwtFunctions';

const createUser = async (user: TUser) => {
  const userWithdoutPassword = await userModel.createUser(user);
  const token = createToken(userWithdoutPassword);
  return { type: null, message: token };
};

export default { createUser };