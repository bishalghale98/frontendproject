import axios from "axios";
import config from "../config/config";

const getProductList = async ({
  filters = {},
  sort = { createdAt: -1 },
  limit = 10,
}) => {
  const query = `limit=${limit}&offset=0&sort=${JSON.stringify(
    sort
  )}&filters=${JSON.stringify(filters)}`;

  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);

  return response;
};

const getById = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);

  return response;
};

const getElectronicsProducts = async ({
  filters = {},
  sort = { createdAt: -1 },
  limit = 10,
}) => {
  const query = `limit=${limit}&offset=0&sort=${JSON.stringify(
    sort
  )}&filters=${JSON.stringify(filters)}`;
  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);

  return response;
};

export { getProductList, getById, getElectronicsProducts };
