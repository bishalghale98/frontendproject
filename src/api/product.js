import axios from "axios";
import config from "../config/config";

const getProductList = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products`);

  return response;
};

const getById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response;
};

export { getProductList, getById };
