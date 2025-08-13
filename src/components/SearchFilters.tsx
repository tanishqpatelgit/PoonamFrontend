import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Search, Filter, X } from "lucide-react";

interface SearchFiltersProps {
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onClearFilters: () => void;
  searchQuery: string;
  selectedCategory: string;
  selectedBrand: string;
  categories: string[];
  brands: string[];
}

const SearchFilters = ({
  onSearchChange,
  onCategoryChange,
  onBrandChange,
  onClearFilters,
  searchQuery,
  selectedCategory,
  selectedBrand,
  categories,
  brands,
}: SearchFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const hasActiveFilters = searchQuery || selectedCategory || selectedBrand;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by part number, name, or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {[searchQuery, selectedCategory, selectedBrand].filter(Boolean).length}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filters */}
      {isFilterOpen && (
        <div className="card-industrial p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Filters</h3>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={onClearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category Filter */}
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Brand Filter */}
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Select value={selectedBrand} onValueChange={onBrandChange}>
                <SelectTrigger id="brand">
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Brands</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="space-y-2">
              <Label>Active Filters:</Label>
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: "{searchQuery}"
                    <button onClick={() => onSearchChange("")}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedCategory && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Category: {selectedCategory}
                    <button onClick={() => onCategoryChange("")}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedBrand && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Brand: {selectedBrand}
                    <button onClick={() => onBrandChange("")}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilters;