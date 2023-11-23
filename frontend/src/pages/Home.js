import React from "react";
import MarialArt from "../img/home/marialart.jpg";
import { Link } from "react-router-dom";
import Socials from "../components/Socials";
import Timetable from "../components/Timetable";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div className=" bg-black">
      <div className="container px-8 mx-auto w-full relative">
        {/* text & image wrapper */}
        <div className="lg:flex flex-col justify-center hidden">
          {/* Text */}
          <div className="w-full lg:mt-32 py-6 lg:pt-0 lg:pb-20 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              martial art <br /> & fitness gym
            </h1>

            <p className="text-[26px] lg:text-2xl font-primary mb-4 lg:mb-12">
              <Socials />
            </p>

            <Link to={"/login"} className="btn mb-[30px]">
              Get Started
            </Link>
          </div>
          {/* image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-[50px] ">
              <img className="lg:max-w-[70%]" src={MarialArt} alt="img" />
            </div>
          </div>
        </div>

        <div class="relative lg:hidden">
          <div></div>
          <img class="w-full" src={MarialArt} alt="img" />
          <div className="absolute top-[70px] left-[10px]">
            <h1 class="h1">
              martial art <br /> & fitness gym
            </h1>
          </div>
        </div>
        <div>
          <Timetable />
        </div>

        <div className="mt-10 py-10">
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default Home;
