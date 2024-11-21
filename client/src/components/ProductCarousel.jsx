import React, { useRef } from "react";
import Slider from "react-slick";
import { CountDownTimer } from "./CountDownTimer"; // Import the Countdown Timer
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    productId: 16,
    name: "Casual Sneakers",
    imageUrl:
      "https://cdn.shoplightspeed.com/shops/632185/files/50752500/dolce-casual-sneakers-red.jpg",
    description: "Comfortable sneakers for daily wear and casual outings.",
    price: 39.99,
    category: "Clothing",
    relatedImages: [
      "https://cdn.shoplightspeed.com/shops/632185/files/50752500/dolce-casual-sneakers-red.jpg",
      "https://m.media-amazon.com/images/I/61wbcy3qmkL._AC_UL320_.jpg",
    ],
    colors: ["red"],
    sizes: ["S"],
    reviews: [],
    available: true,
  },
  {
    productId: 17,
    name: "Casual Sneakers",
    imageUrl:
      "https://cdn.shoplightspeed.com/shops/632185/files/50752500/dolce-casual-sneakers-red.jpg",
    description: "Comfortable sneakers for daily wear and casual outings.",
    price: 39.99,
    category: "Clothing",
    relatedImages: [
      "https://cdn.shoplightspeed.com/shops/632185/files/50752500/dolce-casual-sneakers-red.jpg",
      "https://m.media-amazon.com/images/I/61wbcy3qmkL._AC_UL320_.jpg",
      "https://m.media-amazon.com/images/I/81+8BBmF7hL._AC_SY550_.jpg",
    ],
    colors: ["Black", "Lemon"],
    sizes: ["S", "M", "L"],
    reviews: [],
    available: true,
  },
];

export const ProductCarousel = () => {
  const sliderRef = useRef(null); // Ref for controlling the slider

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
    <div className="w-[90%] mx-auto mt-8">
      {/* Countdown Timer */}
      <CountDownTimer
        title="Flash Sales Countdown"
        targetDate={new Date().getTime() + 1000 * 60 * 60 * 24} // 24 hours from now
        onPrevClick={handlePrev} // Connect navigation to carousel
        onNextClick={handleNext}
      />

      {/* Product Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="border rounded-lg shadow-md bg-white hover:shadow-lg transition">
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {/* <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                  -{product.discount}
                </span> */}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <p className="text-lg font-bold text-gray-800">
                    {product.price}
                  </p>
                  <p className="text-sm line-through text-gray-500">
                    {product.oldPrice}
                  </p>
                </div>
                <div className="flex items-center mt-2">
                  {/* <div className="flex items-center">
                    {Array.from({ length: Math.round(product.rating) }).map(
                      (_, i) => (
                        <span key={i} className="text-yellow-500">
                          ★
                        </span>
                      )
                    )}
                    {Array.from({ length: 5 - Math.round(product.rating) }).map(
                      (_, i) => (
                        <span key={i} className="text-gray-300">
                          ★
                        </span>
                      )
                    )}
                  </div> */}
                  <p className="ml-2 text-xs text-gray-500">
                    {product.reviews.length > 0
                      ? `${product.reviews.length} reviews`
                      : ""}
                  </p>
                </div>
                <button className="w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-800">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
