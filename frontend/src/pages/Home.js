import React from "react";

// import image
import MarialArt from "../img/home/marialart.png";

// import Link
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";

// import transition
import { transition1 } from "../transitions";

// import components
import Socials from "../components/Socials";
import Timetable from "../components/Timetable";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div className=" bg-black">
      <div className="container px-8 mx-auto  relative">
        {/* text & image wrapper */}
        <div className="lg:flex flex-col justify-center hidden">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ transition: transition1, duration: 1 }}
            className="w-full lg:mt-32 py-6 lg:pt-0 lg:pb-20 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              martial art <br /> & fitness gym
            </h1>

            <p className="text-[26px] lg:text-2xl font-primary mb-4 lg:mb-12">
              <Socials />
            </p>

            <Link to={"/login"} className="btn mb-[30px]">
              Get Started
            </Link>
          </motion.div>
          {/* image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ transition: transition1, duration: 1 }}
              className="relative lg:-right-[190px] "
            >
              <motion.img
                className="lg:max-w-[70%]"
                whileHover={{ scale: 1.05 }}
                transition={transition1}
                src={MarialArt}
                alt="img"
              />
            </motion.div>
          </div>
        </div>

        <div class="relative lg:hidden">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ transition: transition1, duration: 0.5 }}
          ></motion.div>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={transition1}
            class="w-full"
            src={MarialArt}
            alt="img"
          />
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-50%" }}
            transition={{ transition: transition1, duration: 2 }}
            className="absolute top-[70px] left-[10px]"
          >
            <h1 class="h1">
              martial art <br /> & fitness gym
            </h1>
          </motion.div>
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
