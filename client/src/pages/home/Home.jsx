import React from "react";
import { Moto } from "../../components";
import { ProductCarousel } from "../../components";
import { Products } from "../products/Products";
export const Home = () => {
  return (
    <div>
      <Moto />
      {/* <ProductCarousel /> */}
      <Products />
    </div>
  );
};
