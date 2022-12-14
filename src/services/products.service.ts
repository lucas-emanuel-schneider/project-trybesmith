import userModel from '../models/products.model';
import { TProduct } from '../Types/types';

const singUpProduct = async (product: TProduct) => {
  const result = await userModel.singUpProduct(product);
  return { type: null, message: result };
};

const getAllProducts = async () => {
  const result = await userModel.getAllProducts();
  return result;
};

export default { singUpProduct, getAllProducts };