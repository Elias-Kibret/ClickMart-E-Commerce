import { ProductCard } from "./ProductCard";

export const ProductGrid = ({ product }) => {
  console.log(product)
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      { product && product?.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
};
