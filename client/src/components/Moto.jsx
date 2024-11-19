import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import moto1 from "../Assests/moto1.png";
import moto2 from "../Assests/moto2.jpg";
import moto3 from "../Assests/moto3.jpg";
import moto4 from "../Assests/moto4.jpg";
import moto5 from "../Assests/moto5.mp4";
import moto6 from "../Assests/moto6.jpg";

export const Moto = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:flex bg-white p-6 gap-6">
        {/* Left Menu */}
        <div className="w-1/4 border-r pr-4">
          <ul className="space-y-4 text-sm font-medium">
            <li className="cursor-pointer hover:text-gray-700 flex items-center justify-between">
              Woman's Fashion <span>›</span>
            </li>
            <li className="cursor-pointer hover:text-gray-700 flex items-center justify-between">
              Men's Fashion <span>›</span>
            </li>
            <li className="font-bold text-black cursor-pointer flex items-center justify-between">
              Electronics <span>›</span>
            </li>
            <li className="cursor-pointer hover:text-gray-700 flex items-center justify-between">
              Home & Lifestyle <span>›</span>
            </li>
            <li className="cursor-pointer hover:text-gray-700 flex items-center justify-between">
              Medicine <span>›</span>
            </li>
            <li className="cursor-pointer hover:text-gray-700 flex items-center justify-between">
              Sports & Outdoor <span>›</span>
            </li>
            <li className="cursor-pointer hover:text-gray-700 flex items-center justify-between">
              Baby's & Toys <span>›</span>
            </li>
            <li className="cursor-pointer hover:text-gray-700 flex items-center justify-between">
              Groceries & Pets <span>›</span>
            </li>
            <li className="cursor-pointer hover:text-gray-700 flex items-center justify-between">
              Health & Beauty <span>›</span>
            </li>
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
              <li className="cursor-pointer hover:text-gray-700">
                Woman's Fashion
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                Men's Fashion
              </li>
              <li className="font-bold text-black cursor-pointer">
                Electronics
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                Home & Lifestyle
              </li>
              <li className="cursor-pointer hover:text-gray-700">Medicine</li>
              <li className="cursor-pointer hover:text-gray-700">
                Sports & Outdoor
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                Baby's & Toys
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                Groceries & Pets
              </li>
              <li className="cursor-pointer hover:text-gray-700">
                Health & Beauty
              </li>
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
