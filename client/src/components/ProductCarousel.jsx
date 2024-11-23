import React, { useRef } from "react";
import Slider from "react-slick";
import { CountDownTimer } from "./CountDownTimer"; // Import the Countdown Timer
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  setProducts,
  setProductByCategory,
  selectfilteredProductsByCategory,
} from "../features/products/productsSlice";

import { ProductCard } from "../pages/products/ProductCard";

export const ProductCarousel = () => {
  const sliderRef = useRef(null); // Ref for controlling the slider
  const allProducts = useSelector(selectProducts);
  console.log(allProducts);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 2500, // Set autoplay speed to 1500ms
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false, // Remove arrows for mobile devices
        },
      },
    ],
  };

  // Handlers for navigation buttons
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="w-[90%] mx-auto my-24">
      {/* Countdown Timer */}
      <CountDownTimer
        title="Flash Sales Countdown"
        targetDate={new Date().getTime() + 1000 * 60 * 60 * 24} // 24 hours from now
        onPrevClick={handlePrev} // Connect navigation to carousel
        onNextClick={handleNext}
      />

      {/* Product Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {allProducts?.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};
