import React from "react";
import Mankick from "../img/about/man-kick.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import OurInstructor from "../components/OurInstructor";
const About = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left py-10 lg:py-0">
          {/* image */}
          <div className="flex-1 max-h-96 lg:pt-10 lg:max-h-max order-2 lg:order-none overflow-hidden ">
            <motion.img
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              whileHover={{ scale: 1.1 }}
              transition={{ transition: transition1, duration: 1.2 }}
              className="max-w-[80%] hidden lg:flex"
              src={Mankick}
              alt="img"
            />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ transition: transition1, duration: 1.2 }}
            className="flex-1 flex flex-col lg:py-0 w-full z-10  justify-center  items-center lg:items-start lg:text-justify px-6 lg:p-0"
          >
            <h1 className="h1">About us</h1>
            <p className="mb-10 text-gray-200 text-justify">
              Fight School has specialized in martial arts since 1986 and has
              one of the most innovative programs in the nation.
              <br />
              <br />
              We teach martial arts because we love it — not because we want to
              make money on you. Unlike other martial arts schools, we do not
              require you to sign long term contracts. You just pay one low
              monthly fee for your martial arts and self defense classes at the
              beginning of each month. Many martial arts..{" "}
              <Link className="text-red-700 font-bold upper leading-tight tracking-tighter uppercase">
                Read More
              </Link>
            </p>
            <p className="font-bold text-xl text-gray-200 uppercase leading-5 mb-4">
              Thomas Cook <br />{" "}
              <span className="uppercase text-sm font-normal text-red-700">
                DIRECTOR / head martial arts coach
              </span>{" "}
            </p>
            <Link to={"#"} className="btn mb-[30px]">
              Read More
            </Link>
          </motion.div>
        </div>
        <div className="py-10 lg:py-20">
          <OurInstructor />
        </div>
      </div>
    </div>
  );
};
export default About;
