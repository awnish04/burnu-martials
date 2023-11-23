import React from "react";
import { Link } from "react-router-dom";
import priceData from "../content/PricingData"
import fitnessData from "../content/PricingData"

const PriceCard = ({ title, price, details, links }) => (
  <div className="flex w-full mb-8 p-2 md:w-1/2 lg:w-1/3 lg:mb-0">
    <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-primary border hover:bg-gray-700 hover:bg-opacity-5">
      <div className="space-y-2">
        <h4 className="text-lg font-bold text-gray-200">{title}</h4>
        <span className="text-3xl lg:text-6xl font-bold text-gray-200">
          {price}
          {title !== "Elite" && <span className="text-sm tracki">/month</span>}
        </span>
      </div>
      <p className="mt-3 leadi text-gray-200">{details}</p>
      <ul className="flex-1 mb-6 dark:text-gray-400">
        {links.map((link, index) => (
          <li key={index} className="flex mb-2 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="flex-shrink-0 w-6 h-6 text-gray-700"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-200">{link}</span>
          </li>
        ))}
      </ul>
      <Link
        to={"/register"}
        type="button"
        className="inline-block px-5 py-3 font-bold tracki text-center rounded bg-gray-800 text-gray-200"
      >
        Get Started
      </Link>
    </div>
  </div>
);

const Pricing = () => {
  
  return (
    <div>
      <section>
        <div className="container mx-auto lg:py-20 text-gray-200">
          {/* ... (your existing code) */}
          <div className="flex flex-wrap items-stretch -mx-4">
            {priceData.map((data, index) => (
              <PriceCard key={index} {...data} />
            ))}
          </div>
          <div className="max-w-2xl mx-auto my-8 lg:my-16 text-center">
            <h2 className="text-lg text-gray-200 font-bold lg:text-4xl">
              Specialist Courses and Fitness Training
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            {fitnessData.map((data, index) => (
              <PriceCard key={index} {...data} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Pricing;
