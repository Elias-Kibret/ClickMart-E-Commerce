import { ProductCard } from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    image: "https://via.placeholder.com/150",
  },
  // Add more products as needed
];

export const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
