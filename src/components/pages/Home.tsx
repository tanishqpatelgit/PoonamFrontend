import { Link } from "react-router-dom";
import { Button } from "../ui/button";

import { Card, CardContent } from "../ui/card";
import { ArrowRight, Search, Zap, Shield, Clock, Award, Package } from "lucide-react";

import { Card, CardContent} from "../ui/card";
import { ArrowRight, Search, Zap, Shield, Clock, Award, Users, Package } from "lucide-react";

import ProductCard from "../ProductCard";
import productsData from "../data/products.json";

const Home = () => {
  const featuredProducts = productsData.slice(0, 3);
  const categories = [
    { name: "Bearings", icon: Package, count: "500+ parts" },
    { name: "Motors", icon: Zap, count: "200+ parts" },
    { name: "Valves", icon: Package, count: "300+ parts" },
    { name: "Pumps", icon: Package, count: "150+ parts" },
  ];

  const features = [
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find exactly what you need with our powerful search and filtering system"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All parts are sourced from certified manufacturers with full warranties"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Same-day dispatch for in-stock items with express delivery options"
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Technical support from qualified engineers to help with specifications"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <section className="relative gradient-hero text-primary-foreground">
        <div
          className="relative w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

          <div className="relative container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl text-white">
              <h1 className="text-hero mb-6">
                Industrial Parts & Components
                <span className="block text-accent">Made Simple</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Your trusted supplier for bearings, motors, valves, pumps, and precision components.
                Over 10,000 parts in stock with same-day dispatch available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-industrial text-lg px-8">
                  <Link to="/products">
                    Browse Catalog
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-industrial-outline text-lg px-8">
                  <Link to="/contact">
                    Request Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section mb-4">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of industrial components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/products?category=${category.name}`}>
                <Card className="card-industrial group cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <category.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-section mb-4">Why Choose IndustrialParts?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best service and quality for your industrial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="card-industrial text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-section mb-4">Featured Products</h2>
              <p className="text-lg text-muted-foreground">
                Popular items from our extensive catalog
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

 
    </div>
  );
};

export default Home;