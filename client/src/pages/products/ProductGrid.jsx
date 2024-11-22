import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ product }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {product.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
