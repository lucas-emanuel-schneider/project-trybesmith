import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { TUser } from '../Types/types';

const createUser = async (user: TUser): Promise<TUser> => {
  const { username, vocation, level } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader & TUser>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, user.password],
  );
  const { password, ...userWithdoutPassword } = user;
  return { id: insertId, ...userWithdoutPassword };
};

const getUserByName = async (user: TUser): Promise<TUser> => {
  const [[result]] = await connection.execute<ResultSetHeader & TUser[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?;',
    [user.username],
  );
  return result;
};

export default { createUser, getUserByName };