 import { Link } from "react-router-dom";
//import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
// import { FileText,  } from "lucide-react";

// interface Product {
//   id: string;
//   partNumber: string;
//   name: string;
//   category: string;
//   brand: string;
//   price: number;
//   description: string;
//   image: string;
//   inStock: boolean;
//   tags: string[];
// }

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard = ({ product }: ProductCardProps) => {
//   return (
//     <Card className="card-industrial group cursor-pointer">
//       <Link to={`/products/${product.id}`}>
//         <CardHeader className="p-0">
//           <div className="relative overflow-hidden rounded-t-lg">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//             <div className="absolute top-2 right-2">
//               {/* {product.inStock ? (
//                 <Badge variant="secondary" className="bg-green-100 text-green-800">
//                   <CheckCircle className="h-3 w-3 mr-1" />
//                   In Stock
//                 </Badge>
//               ) : (
//                 <Badge variant="secondary" className="bg-red-100 text-red-800">
//                   <XCircle className="h-3 w-3 mr-1" />
//                   Out of Stock
//                 </Badge>
//               )} */}
//             </div>
//           </div>
//         </CardHeader>
        
//         <CardContent className="p-4">
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <Badge variant="outline" className="text-xs">
//                 {product.category}
//               </Badge>
//               {/* <span className="text-xs text-muted-foreground">{product.brand}</span> */}
//             </div>
            
//             <h3 className="text-card-title font-semibold line-clamp-2 group-hover:text-primary transition-colors">
//               {product.name}
//             </h3>
            
//             {/* <p className="text-sm text-muted-foreground font-mono">
//               Part: {product.partNumber}
//             </p> */}
            
//             <p className="text-sm text-muted-foreground line-clamp-2">
//               {product.description}
//             </p>
            
//             <div className="flex items-center justify-between pt-2">
//               <span className="text-lg font-bold text-primary">
//                 £{product.price.toFixed(2)}
//               </span>
//               <Button variant="ghost" size="sm">
//                 <FileText className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Link>
      
//       <CardFooter className="p-4 pt-0">
//         <Button className="w-full btn-industrial" disabled={!product.inStock}>
//           {product.inStock ? "Add to Quote" : "Out of Stock"}
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default ProductCard;

import React from "react";
import type { Product } from "../services/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
   <div className="card-industrial group cursor-pointer border rounded-lg shadow overflow-hidden">
  <Link to={`/products/${product.id}`}>
    <div className="relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
     
    </div>

    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs border rounded px-2 py-0.5">{product.category}</span>
        {/* <span className="text-xs text-muted-foreground">{product.brand}</span> */}
      </div>

      <h2 className="text-card-title font-semibold line-clamp-2 group-hover:text-primary transition-colors">
        {product.name}
      </h2>

      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

      <div className="flex items-center justify-between pt-2">
        <button type="button" className="text-gray-500 hover:text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h4l2 2h6a2 2 0 012 2v4" />
          </svg>
        </button>
      </div>
    </div>
  </Link>

  <div className="p-4 pt-0">
    <button
      className="w-full btn-industrial bg-primary text-white py-2 rounded disabled:opacity-50"
   
    >
      
    </button>
  </div>
</div>

  );
};

export default ProductCard;
