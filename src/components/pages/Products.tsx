import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import SearchFilters from "../SearchFilters";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Grid, List, ArrowUpDown } from "lucide-react";
import productsData from "../data/products.json";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("name");

  // Get filter values from URL params
  const searchQuery = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "";
  const selectedBrand = searchParams.get("brand") || "";

  // Get unique categories and brands
  const categories = [...new Set(productsData.map(product => product.category))];
  const brands = [...new Set(productsData.map(product => product.brand))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = productsData.filter(product => {
      const matchesSearch = !searchQuery || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesBrand = !selectedBrand || product.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesBrand;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedBrand, sortBy]);

  const updateSearchParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-section mb-4">Product Catalog</h1>
          <p className="text-lg text-muted-foreground">
            Browse our extensive range of industrial parts and components
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <SearchFilters
            onSearchChange={(query) => updateSearchParams("search", query)}
            onCategoryChange={(category) => updateSearchParams("category", category)}
            onBrandChange={(brand) => updateSearchParams("brand", brand)}
            onClearFilters={clearAllFilters}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            categories={categories}
            brands={brands}
          />
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6 card-industrial p-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {productsData.length} products
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort */}
            <div className="flex items-center space-x-2">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="category">Category</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode */}
            <div className="flex items-center border border-border rounded-md">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="card-industrial p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button onClick={clearAllFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;