import React from "react";
import { useSelector } from "react-redux";
import visaIcon from "../../Assests/Visa.png";
import mastercardIcon from "../../Assests/masterCard.png";
export const BillingDetails = () => {
  const cart = useSelector((state) => state.cart.items); // Get cart items from Redux store
  const total = cart.reduce((acc, cur) => acc + cur.subtotal, 0); // Calculate the total

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 p-4 lg:p-8 w-full max-w-screen-xl mx-auto">
      {/* Billing Details Form */}
      <div className="flex-1 bg-white p-6 rounded-lg w-full">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-900">
          Billing Details
        </h2>
        <form className="space-y-6">
          {/* Input Fields */}
          {[
            {
              id: "firstName",
              label: "First Name",
              required: true,
              placeholder: "Enter your first name",
            },
            {
              id: "companyName",
              label: "Apartment, floor, etc. (optional)",
              placeholder: "Enter your Apartment (optional)",
            },
            {
              id: "streetAddress",
              label: "Street Address",
              required: true,
              placeholder: "Enter your street address",
            },
            {
              id: "city",
              label: "Town/City",
              required: true,
              placeholder: "Enter your city",
            },
            {
              id: "phone",
              label: "Phone Number",
              required: true,
              placeholder: "Enter your phone number",
            },
            {
              id: "email",
              label: "Email Address",
              required: true,
              placeholder: "Enter your email",
            },
          ].map(({ id, label, required, placeholder }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
              >
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                id={id}
                placeholder={placeholder}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          ))}
        </form>
      </div>

      {/* Order Summary */}
      <div className="flex-1 bg-white p-6 rounded-lg w-full">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-900">
          Your Order
        </h2>

        {/* Product List */}
        <div className="space-y-4">
          {cart?.map(({ name, price, image, subtotal }, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              <img
                src={image}
                alt={name}
                className="w-14 h-14 object-cover rounded-md"
              />
              <p className="flex-1 pl-4 text-gray-800 font-medium">{name}</p>
              <p className="text-gray-800 font-semibold">{subtotal}</p>
            </div>
          ))}

          {/* Order Summary Totals */}
          <div className="space-y-2">
            <div className="flex justify-between text-gray-700">
              <p className="font-medium">Subtotal:</p>
              <p className="font-semibold">${total}</p>
            </div>
            <div className="flex justify-between text-gray-700">
              <p className="font-medium">Shipping:</p>
              <p className="font-semibold text-green-500">Free</p>
            </div>
            <div className="flex justify-between border-t pt-4 text-gray-900">
              <p className="text-lg font-semibold">Total:</p>
              <p className="text-lg font-bold">${total}</p>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mt-6">
          <p className="text-lg font-medium mb-4 text-gray-900">
            Payment Method
          </p>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-800">Bank</span>
              </div>
              <div className="flex gap-2">
                <img
                  src={visaIcon}
                  alt="Visa"
                  className="w-10 object-contain"
                />
                <img
                  src={mastercardIcon}
                  alt="MasterCard"
                  className="w-10 object-contain"
                />
              </div>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-800">Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Coupon Code */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:space-x-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Apply
          </button>
        </div>

        {/* Place Order Button */}
        <div className="mt-6 flex justify-start">
          <button className="bg-red-500 text-white px-8 py-2 rounded-md text-lg font-medium hover:bg-red-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
