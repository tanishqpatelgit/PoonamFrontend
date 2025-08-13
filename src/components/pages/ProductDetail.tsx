import { useParams, Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
// import { Separator } from "../ui/separator";
import { ArrowLeft, FileText, Download, CheckCircle, XCircle, Package, Truck, Shield } from "lucide-react";
import productsData from "../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="p-0">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="card-industrial p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant="secondary">{product.brand}</Badge>
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
              <h1 className="text-section mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground font-mono">
                Part Number: {product.partNumber}
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">£{product.price.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground">ex. VAT</span>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full btn-industrial" size="lg" disabled={!product.inStock}>
                {product.inStock ? "Add to Quote Request" : "Out of Stock"}
              </Button>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Datasheet
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  CAD Files
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Quality</p>
                <p className="text-xs text-muted-foreground">Certified</p>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Delivery</p>
                <p className="text-xs text-muted-foreground">1-2 days</p>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-lg">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Warranty</p>
                <p className="text-xs text-muted-foreground">12 months</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <Card className="card-industrial mb-8">
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2">
                  <span className="font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        <Card className="card-industrial">
          <CardHeader>
            <CardTitle>Related Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {productsData
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 3)
                .map(relatedProduct => (
                  <Link key={relatedProduct.id} to={`/products/${relatedProduct.id}`}>
                    <div className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-32 object-cover rounded mb-3"
                      />
                      <h4 className="font-medium text-sm line-clamp-2 mb-2">
                        {relatedProduct.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        £{relatedProduct.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;