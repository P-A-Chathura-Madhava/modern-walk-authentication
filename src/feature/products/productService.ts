import axios from "axios";

const getMensProducts = async () => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/men's%20clothing`
  );
  return response.data;
};

const getWomensProducts = async () => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/women's%20clothing`
  );
  return response.data;
};

const getMixedProducts = async () => {
  const mens = await axios.get(
    `https://fakestoreapi.com/products/category/men's%20clothing?limit=2`
  );
  const mensData = mens.data;
  const womens = await axios.get(
    `https://fakestoreapi.com/products/category/women's%20clothing?limit=2`
  );
  const womensData = womens.data;
  const data = mensData.concat(womensData);
  return data;
};

const productService = {
  getMensProducts,
  getWomensProducts,
  getMixedProducts,
};

export default productService;
