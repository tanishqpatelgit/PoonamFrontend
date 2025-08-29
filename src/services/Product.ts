import api from "./api"; // ✅ uses configured base URL

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  // add any other fields you use
}

export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get("/Products/Products"); // exact path
  return res.data;
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const res = await api.get(`/Products/Products?category=${encodeURIComponent(category)}`);
  return res.data;
};
