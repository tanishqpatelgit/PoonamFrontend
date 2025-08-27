  import api from "./api";

  const IMAGE_BASE_URL = "http://135.235.194.88:82";

  export interface Product {
    id: number;
    name: string;
    description: string;
    category?: string;
    image: string; // backend field
  }

  // ✅ Helper to fix image path
  const mapProduct = (product: Product): Product => ({
    ...product,
    image: product.image ? `${IMAGE_BASE_URL}${product.image}` : "/default.png", // fallback
  });

// ✅ Get all products
export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get<Product[]>("/Products/Productst");  // <-- fixed
  return res.data.map(mapProduct);
};


  // ✅ Get product by ID
  export const getProductById = async (id: number): Promise<Product> => {
    const res = await api.get<Product>(`/Products/Product/${id}`);
    return mapProduct(res.data);
  };

  // ✅ Get products by category
  export const getProductsByCategory = async (category: string): Promise<Product[]> => {
    const res = await api.get<Product[]>(`/Products/Products?category=${encodeURIComponent(category)}`);
    return res.data.map(mapProduct);
  };
