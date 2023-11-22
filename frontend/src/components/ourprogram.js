import React from "react";
// import images
import Program_1 from "../img/services/program_1.jpg";
import Program_2 from "../img/services/program_2.jpg";
import Program_3 from "../img/services/program_3.jpg";
import Program_4 from "../img/services/program_4.jpg";
import Program_5 from "../img/services/program_5.jpg";
import Program_6 from "../img/services/program_6.jpg";








// import icons
// import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";

const ourprogram = () => {
  return (
    <div>
      <div className="mx-auto text-center">
            <span className="h1">Our Programs</span>
          </div>
     

      {/* <!-- component -->
<!-- Create By Joker Banny --> */}
      <div class="min-h-screen flex justify-center items-center px-8 py-10">
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          <div class="max-w-sm bg-primary">
            <div class="relative">
              <img class="w-full" src={Program_1} alt="Colors" />
            </div>

            <h1 class="mt-4 px-6 text-gray-200 text-center text-2xl font-bold cursor-pointer">
              Kids Karate Groups <br />
              <span className="text-sm font-normal leading-none capitalize ">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </h1>
            <div class="my-4 ">
              <div class="flex space-x-1 justify-center text-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-200 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p className="text-[#ff3131] justify-center">15:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div class="max-w-sm bg-primary">
            <div class="relative">
              <img class="w-full" src={Program_2} alt="Colors" />
            </div>

            <h1 class="mt-4 px-6 text-gray-200 text-center text-2xl font-bold cursor-pointer">
            Jiu-jitsu <br />
              <span className="text-sm font-normal leading-none capitalize ">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </h1>
            <div class="my-4 ">
              <div class="flex space-x-1 justify-center text-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-200 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p className="text-[#ff3131] justify-center">15:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div class="max-w-sm bg-primary">
            <div class="relative">
              <img class="w-full" src={Program_3} alt="Colors" />
            </div>

            <h1 class="mt-4 px-6 text-gray-200 text-center text-2xl font-bold cursor-pointer">
            Judo <br />
              <span className="text-sm font-normal leading-none capitalize ">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </h1>
            <div class="my-4 ">
              <div class="flex space-x-1 justify-center text-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-200 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p className="text-[#ff3131] justify-center">15:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div class="max-w-sm bg-primary">
            <div class="relative">
              <img class="w-full" src={Program_4} alt="Colors" />
            </div>

            <h1 class="mt-4 px-6 text-gray-200 text-center text-2xl font-bold cursor-pointer">
            Muay
Thai <br />
              <span className="text-sm font-normal leading-none capitalize ">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </h1>
            <div class="my-4 ">
              <div class="flex space-x-1 justify-center text-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-200 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p className="text-[#ff3131] justify-center">15:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div class="max-w-sm bg-primary">
            <div class="relative">
              <img class="w-full" src={Program_5} alt="Colors" />
            </div>

            <h1 class="mt-4 px-6 text-gray-200 text-center text-2xl font-bold cursor-pointer">
            Gym <br />
              <span className="text-sm font-normal leading-none capitalize ">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </h1>
            <div class="my-4 ">
              <div class="flex space-x-1 justify-center text-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-200 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p className="text-[#ff3131] justify-center">15:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div class="max-w-sm bg-primary">
            <div class="relative">
              <img class="w-full" src={Program_6} alt="Colors" />
            </div>

            <h1 class="mt-4 px-6 text-gray-200 text-center text-2xl font-bold cursor-pointer">
            Fitness Classes <br />
              <span className="text-sm font-normal leading-none capitalize ">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </h1>
            <div class="my-4 ">
              <div class="flex space-x-1 justify-center text-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-200 mb-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <p className="text-[#ff3131] justify-center">15:00 - 17:00</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ourprogram;
