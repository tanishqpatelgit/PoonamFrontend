import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FileText, CheckCircle, XCircle } from "lucide-react";

interface Product {
  id: string;
  partNumber: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  tags: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="card-industrial group cursor-pointer">
      <Link to={`/products/${product.id}`}>
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 right-2">
              {product.inStock ? (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  In Stock
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  <XCircle className="h-3 w-3 mr-1" />
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{product.brand}</span>
            </div>
            
            <h3 className="text-card-title font-semibold line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <p className="text-sm text-muted-foreground font-mono">
              Part: {product.partNumber}
            </p>
            
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-bold text-primary">
                £{product.price.toFixed(2)}
              </span>
              <Button variant="ghost" size="sm">
                <FileText className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Link>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full btn-industrial" disabled={!product.inStock}>
          {product.inStock ? "Add to Quote" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;