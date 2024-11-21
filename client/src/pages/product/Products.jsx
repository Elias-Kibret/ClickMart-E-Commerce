import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  selectProducts,
  setProducts,
} from "../../features/products/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);

  useEffect(() => {
    dispatch(
      setProducts([{ name: "test product", description: "description1" }])
    );
  }, [dispatch]);

  console.log(allProducts);

  return (
    <div>
      Check if Products are selecting from Redux.
      {allProducts?.map((product) => (
        <div key={product.name}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
      <button
        onClick={() =>
          dispatch(
            setProducts([{ name: "test product", description: "description1" }])
          )
        }
      >
        Dispatch
      </button>
      <Outlet />
    </div>
  );
};

export default Products;
