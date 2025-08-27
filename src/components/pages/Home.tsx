import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ArrowRight, Package, Truck } from "lucide-react";
import ProductCard from "../ProductCard";

import type { Category } from "../../services/Category";
import { getCategories } from "../../services/Category";
import { getProducts } from "../../services/Product";
import type { Product } from "../../services/Product";



// Product interface


const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products from backend API
useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
   if (loading) return <p className="text-center py-8">Loading products...</p>;
  if (error) return <p className="text-center py-8 text-red-500">{error}</p>;

  const features = [
    {
      title: "Fast Delivery",
      description: "Same-day dispatch on thousands of items",
      icon: Truck,
    },
    {
      title: "Trusted Quality",
      description: "Only top-grade industrial parts",
      icon: Package,
    },
    {
      title: "Easy Ordering",
      description: "Simple checkout process with secure payments",
      icon: ArrowRight,
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
                Your trusted supplier for bearings, motors, valves, pumps, and
                precision components. Over 10,000 parts in stock with same-day
                dispatch available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-industrial text-lg px-8">
                  <Link to="/products">
                    Browse Catalog
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="btn-industrial-outline text-lg px-8"
                >
                  <Link to="/contact">Request Quote</Link>
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
              <Link key={category.id} to={`/products?category=${category.name}`}>
                <Card className="card-industrial group cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <Package className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count || "Available"}
                    </p>
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
              We're committed to providing the best service and quality for your
              industrial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="card-industrial text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
       <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Featured Products</h1>
      {products.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {products.slice(0, 4).map((product) => (
  <ProductCard key={product.id} product={product} />
))}

        </div>
      ) : (
        <p className="text-center text-muted-foreground">No products found.</p>
      )}
    </div>
      </section>
    </div>
  );
};

export default Home;


// import axios from "axios";
// import { useEffect, useState } from "react";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
// }

// const Home = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://135.235.194.88/api/Products/Products");
//         setProducts(res.data); // assuming API returns an array
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div>
//       <h2>Products</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="p-4 border rounded shadow">
//             <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2"/>
//             <h3 className="text-lg font-bold">{product.name}</h3>
//             <p>{product.description}</p>
//             <p className="text-green-600 font-semibold">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
