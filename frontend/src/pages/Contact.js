import React from "react";
import Image_1 from "../img/contact/image_1.jpg";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const Contact = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto lg:h-screen h-fit">
        <div className="flex flex-col lg:flex-row items-center justify-start pt-4 gap-x-8 text-center lg:text-left">
          {/* text & form */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ transition: transition1, duration: 1.2 }}
            className="lg:flex flex-col  px-4"
          >
            <h1 className="h1">Contact Us</h1>
            <p className="mb-12 text-gray-200 capitalize ">
              We would love to get sugestions from you.
            </p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-80 text-red-600 "
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-80 text-red-600 "
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-80 text-red-600 "
                type="text"
                placeholder="Your Message"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send it
              </button>
            </form>
          </motion.div>
          <div className="flex-1 max-h-96 lg:pt-10 lg:max-h-max order-2 lg:order-none overflow-hidden ">
            <motion.img
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              whileHover={{ scale: 1.1 }}
              transition={{ transition: transition1, duration: 1.2 }}
              className="max-w-[70%] hidden lg:flex  justify-center items-center float-right"
              src={Image_1}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
