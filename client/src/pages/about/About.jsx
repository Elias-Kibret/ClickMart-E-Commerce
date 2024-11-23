import React from "react";

export const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span>Home</span> / <span className="text-gray-800">About</span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2015, Exclusive is South Africa's premier online
              shopping marketplace. We offer a wide selection of products,
              supported by easy navigation and streamlined design. Our mission
              is to transform the shopping experience for 150+ countries,
              delivering products from 500+ brands and ensuring a seamless
              retail experience.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1661274189734-90d6aa7eb010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-gray-800">10.5k</div>
            <p className="text-gray-600 mt-2">Sellers on our site</p>
          </div>
          <div className="bg-blue-600 text-white shadow rounded-lg p-6 text-center">
            <div className="text-2xl font-bold">33k</div>
            <p className="mt-2">Monthly Products Sold</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-gray-800">45.5k</div>
            <p className="text-gray-600 mt-2">Customer orders on our site</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-gray-800">25k</div>
            <p className="text-gray-600 mt-2">Annual gross sales</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="rounded-full object-contain mx-auto w-28 h-28 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Tom Cruise
              </h4>
              <p className="text-gray-600">Founder & Chairman</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="rounded-full object-contain mx-auto w-28 h-28 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Emma Watson
              </h4>
              <p className="text-gray-600">Managing Director</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team Member"
                className="rounded-full mx-auto w-28 h-28 mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Will Smith
              </h4>
              <p className="text-gray-600">Product Designer</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center bg-white shadow rounded-lg p-6">
            <img
              src="https://images.unsplash.com/photo-1643906226799-59eab234e41d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature Icon"
              className="mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-800">
              Free and Fast Delivery
            </h4>
            <p className="text-gray-600">
              Enjoy free delivery on orders over $50.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white shadow rounded-lg p-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1684179639963-e141ce2f8074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature Icon"
              className="mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-800">
              24/7 Customer Service
            </h4>
            <p className="text-gray-600">
              Friendly 24/7 customer support for all your needs.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white shadow rounded-lg p-6">
            <img
              src="https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Feature Icon"
              className="mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-800">
              Money Back Guarantee
            </h4>
            <p className="text-gray-600">
              Secure shopping with a 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
