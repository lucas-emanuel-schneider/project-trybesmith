import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { TProduct } from '../Types/types';

const singUpProduct = async (product: TProduct): Promise<TProduct> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader & TProduct[]>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES(?, ?)',
    [product.name, product.amount],
  );
  return { id, ...product };
};

const getAllProducts = async (): Promise<TProduct[]> => {
  const [result] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result;
};

export default { singUpProduct, getAllProducts };