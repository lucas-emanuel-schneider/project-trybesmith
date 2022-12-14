import userModel from '../models/products.model';
import { TProduct } from '../Types/types';

const singUpProduct = async (product: TProduct) => {
  const result = await userModel.singUpProduct(product);
  console.log(result);
  return { type: null, message: result };
};

export default { singUpProduct };