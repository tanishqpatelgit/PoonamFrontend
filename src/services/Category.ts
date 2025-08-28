import axios from "axios";

// Base API URL
const API_BASE = "http://135.235.194.88/api"; // removed :82

// Define a type for Category
export interface Category {
  id: number;
  name: string;
  count:number;
}

// API call to get categories
export const getCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>(`${API_BASE}/Catagory/Catagorytype`);
  return response.data;
};
