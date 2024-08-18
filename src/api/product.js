import axios from "axios";
import config from "../config/config";

const getProductList = async () => {
  const response = await axios.get(`${config.apiUrl}/api/auth/products`);

  return response;
};

export { getProductList };
