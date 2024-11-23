import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import moto1 from "../Assests/moto1.png";
import moto2 from "../Assests/moto2.jpg";
import moto3 from "../Assests/moto3.jpg";
import moto4 from "../Assests/moto4.jpg";
import moto5 from "../Assests/moto5.mp4";
import moto6 from "../Assests/moto6.jpg";

const categories = [
  "Men",
  "Electronics",
  "Home",
  "Medicine",
  "Sport",
  "Toys",
  "Pets",
  "Health",
];

export const Moto = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex bg-white p-6 gap-6">
        {/* Left Menu */}
        <div className="w-1/4 border-r pr-4">
          <ul className="space-y-4 text-sm font-medium">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-gray-700 flex items-center justify-between ${
                  index === 2 ? "font-bold text-black" : ""
                }`}
              >
                <Link
                  to="/products"
                  state={{ category }}
                  className="flex items-center justify-between w-full"
                >
                  {category} <span>›</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Carousel */}
        <div className="w-3/4">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={1500}
          >
            <video
              className="rounded-lg object-cover"
              style={{ height: "400px", width: "100%" }}
              controls
              autoPlay
              loop
              muted
            >
              <source src={moto5} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="relative">
              <img
                src={moto2}
                alt="Promo Image"
                className="rounded-lg object-cover"
                style={{ height: "400px", width: "100%" }}
              />
            </div>
            <div>
              <img
                src={moto3}
                alt="Image 2"
                className="rounded-lg object-cover"
                style={{ height: "400px", width: "100%" }}
              />
            </div>
            <div>
              <img
                src={moto4}
                alt="Image 3"
                className="rounded-lg object-cover"
                style={{ height: "400px", width: "100%" }}
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        {/* Top Navigation */}
        <div className="bg-gray-100 p-4 border-b">
          <div className="overflow-x-auto whitespace-nowrap">
            <ul className="flex space-x-6 text-sm font-medium">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${
                    index === 2 ? "font-bold text-black" : "hover:text-gray-700"
                  }`}
                >
                  <Link to="/products" state={{ category }}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full p-4">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={2000}
          >
            <div className="relative">
              <video
                className="rounded-lg object-cover"
                style={{ height: "300px", width: "100%" }}
                controls
                autoPlay
                loop
                muted
              >
                <source src={moto5} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <img
                src={moto2}
                alt="Image 2"
                className="rounded-lg object-cover"
                style={{ height: "300px", width: "100%" }}
              />
            </div>
            <div>
              <img
                src={moto3}
                alt="Image 3"
                className="rounded-lg object-cover"
                style={{ height: "300px", width: "100%" }}
              />
            </div>
            <div>
              <img
                src={moto4}
                alt="Image 4"
                className="rounded-lg object-cover"
                style={{ height: "300px", width: "100%" }}
              />
            </div>
            <div>
              <img
                src={moto6}
                alt="Image 5"
                className="rounded-lg object-cover"
                style={{ height: "300px", width: "100%" }}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
