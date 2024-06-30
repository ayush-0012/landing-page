import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow With Data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, Flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold ml-2 text-gray-600"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-gray-600 md:text-2xl text-xl font-bold mt-2 md:pl-2">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-md my-6 mx-auto py-3 text-black font-bold">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Hero;
