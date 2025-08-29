import React, { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";


import ProductCard from "../ProductCard";
import { getProducts, getProductsByCategory} from "../../services/Product";
import type { Product } from "../../services/Product";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState<string>(""); 
  const [search, setSearch] = useState<string>(""); 

  useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = category 
        ? await getProductsByCategory(category) 
        : await getProducts();
      console.log("✅ Final fetched products:", res);
      setProducts(res);
    } catch (err) {
      console.error("❌ Error in component:", err);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, [category]);


  // Filter products by search text (name)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="text-center py-8">Loading products...</p>;
  }

  if (error) {
    return <p className="text-center py-8 text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-section mb-6">Product Catalog</h1>

    
         
         
        <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
  {/* Category Filter */}
  <div className="relative w-full sm:w-auto">
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="border rounded-lg p-2 pr-8 w-full sm:w-48 appearance-none
             hover:border-primary focus:border-primary focus:ring-primary outline-none transition"
    >
      <option value="">
        All Categories
      </option>
      <option value="Test Server">Test Server</option>
      <option value="Fastners">Fastners</option>
    </select>

    {/* Icon on top of dropdown (decorative) */}
    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
      <Filter className="w-4 h-4" />
    </div>
  </div>

  {/* Search Input */}
  <div className="relative w-full sm:flex-1">
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded-lg pl-9 pr-3 py-2 w-full text-sm
             hover:border-primary focus:border-primary focus:ring-primary outline-none transition"
    />
    <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400">
      <Search className="w-4 h-4" />
    </div>
  </div>
</div>


        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center py-12 text-muted-foreground">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
