import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const CountDownTimer = ({
  title,
  targetDate,
  onPrevClick,
  onNextClick,
}) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, timeLeft]);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white py-4 rounded-lg w-[90%] sm:w-[80%]  mx-auto mt-8 ">
      {/* Title */}
      <h2 className="text-lg sm:text-2xl font-bold text-center sm:text-left">
        {title || "Flash Sales"}
      </h2>

      {/* Countdown Timer */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        {Object.entries(timeLeft).map(([key, value], index) => (
          <div key={index} className="text-center">
            <p className="text-lg sm:text-xl font-bold">
              {value.toString().padStart(2, "0")}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="sm:flex space-x-2 mt-4 sm:mt-0 hidden ">
        <button
          onClick={onPrevClick} // Trigger the previous slide
          className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 shadow-sm hover:bg-gray-300"
        >
          <AiOutlineArrowLeft size={18} />
        </button>
        <button
          onClick={onNextClick} // Trigger the next slide
          className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 shadow-sm hover:bg-gray-300"
        >
          <AiOutlineArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
