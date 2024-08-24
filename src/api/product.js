import api from "./api";

const getProductList = async ({
  filters = {},
  sort = { createdAt: -1 },
  limit = 10,
}) => {
  const query = `limit=${limit}&offset=0&sort=${JSON.stringify(
    sort
  )}&filters=${JSON.stringify(filters)}`;

  const response = await api.get(`/products?${query}`);

  return response;
};

const getById = async (id) => {
  const response = await api.get(`/products/${id}`);

  return response;
};

const getElectronicsProducts = async ({
  filters = { category: "electronics" },
  sort = { createdAt: -1 },
  limit = 10,
}) => {
  const query = `limit=${limit}&offset=0&sort=${JSON.stringify(
    sort
  )}&filters=${JSON.stringify(filters)}`;
  const response = await api.get(`/products?${query}`);

  return response;
};

const getSmartphonesProducts = async ({
  filters = { category: "smartphone" },
  sort = { createdAt: -1 },
  limit = 10,
}) => {
  const query = `limit=${limit}&offset=0&sort=${JSON.stringify(
    sort
  )}&filters=${JSON.stringify(filters)}`;
  const response = await api.get(`/products?${query}`);

  return response;
};

const getCategories = async () => {
  const response = await api.get(`/products/categories`);

  return response;
};

const addProduct = async ({ name, category, price, brand }) => {
  const response = await api.post(`/products`, {
    name,
    category,
    price,
    brand,
  });

  return response;
};

const deleteProduct = async (id) => {
  const response = await api.delete(`/products/${id}`);

  return response;
};

// related product

export {
  getProductList,
  getById,
  getElectronicsProducts,
  getSmartphonesProducts,
  getCategories,
  addProduct,
  deleteProduct,
};
