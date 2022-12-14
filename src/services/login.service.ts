import userModel from '../models/user.model';
import { TUser } from '../Types/types';
import { createToken } from '../auth/jwtFunctions';

const login = async (user: TUser) => {
  const userSearch = await userModel.getUserByName(user);
  if (!userSearch || userSearch.password !== user.password) {
    return { type: 'error', message: 'Username or password invalid' };
  }
  const { password, ...userWithoutPassword } = userSearch;
  const token = createToken(userWithoutPassword);
  return { type: null, message: token };
};

export default { login };