import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { TProduct } from '../Types/types';

const singUpProduct = async (product: TProduct): Promise<TProduct> => {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader & TProduct[]>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES(?, ?)',
    [product.name, product.amount],
  );
  return { id, ...product };
};

export default { singUpProduct };