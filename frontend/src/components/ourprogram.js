import React from "react";
import program from "../content/programData";
const OurProgram = () => {
  return (
    <div className="text-center">
      <span className="h1">Our Programs</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 px-6">
        {program.map((program, index) => (
          <div key={index} className="max-w-full bg-primary">
            <div className="relative">
              <img
                className="w-full"
                src={program.image}
                alt={`Program ${index + 1}`}
              />
            </div>
            <h1 className="mt-4 px-6 text-gray-200 text-center text-2xl font-bold cursor-pointer">
              {program.title} <br />
              <span className="text-sm font-normal leading-none capitalize">
                {program.description}
              </span>
            </h1>
            <div className="my-4 ">
              <div className="flex space-x-1 justify-center text-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-200 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p className="text-[#ff3131] justify-center">{program.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurProgram;
