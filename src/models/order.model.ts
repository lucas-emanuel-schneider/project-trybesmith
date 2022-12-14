import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { TOrders } from '../Types/types';

const getAllOrders = async (): Promise<TOrders[]> => {
  const [result] = await connection.execute<ResultSetHeader & TOrders[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o INNER JOIN 
    Trybesmith.products AS p ON p.order_id = o.id GROUP BY o.id;`,
  );
  return result;
};

export default { getAllOrders };