import orderModel from '../models/order.model';

const getAllOrders = async () => {
  const result = await orderModel.getAllOrders();
  return { type: null, message: result };
};

export default { getAllOrders };