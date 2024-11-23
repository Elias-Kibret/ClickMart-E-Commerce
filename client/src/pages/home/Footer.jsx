import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-40">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Exclusive
          </h3>
          <p className="text-sm text-gray-400 mb-3">Subscribe</p>
          <p className="text-sm text-gray-400 mb-4">
            Get <span className="text-blue-400 font-medium">10% off</span> your
            first order.
          </p>
          <form className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 pl-4 pr-14 rounded-full text-black focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              ➜
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Support
          </h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-400">
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
            </li>
            <li className="text-sm text-gray-400">exclusive@gmail.com</li>
            <li className="text-sm text-gray-400">+88015-88888-9999</li>
          </ul>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Account
          </h3>
          <ul className="space-y-2">
            {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">
            Download App
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-2 mb-6">
            <img
              src="https://via.placeholder.com/150x50.png?text=Google+Play"
              alt="Google Play"
              className="w-1/2 hover:opacity-80 transition"
            />
            <img
              src="https://via.placeholder.com/150x50.png?text=App+Store"
              alt="App Store"
              className="w-1/2 hover:opacity-80 transition"
            />
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FiInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Exclusive Marketplace. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
