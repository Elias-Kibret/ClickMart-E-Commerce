export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-4 text-gray-800 font-medium">{product.name}</h3>
      <div className="flex items-center justify-between mt-2">
        <p className="text-gray-600">${product.price}</p>
        {product.oldPrice && (
          <p className="text-red-500 line-through">${product.oldPrice}</p>
        )}
      </div>
    </div>
  );
};

