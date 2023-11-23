import React from "react";
import Image_1 from "../img/contact/image_1.jpg";
const Contact = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-start pt-4 gap-x-8 text-center lg:text-left">
          {/* text & form */}
          <div className="lg:flex flex-col  px-4">
            <h1 className="h1">Contact Us</h1>
            <p className="mb-12 text-gray-200 capitalize ">
              We would love to get sugestions from you.
            </p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="contact-input "
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="contact-input "
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <input
                className="contact-input "
                type="text"
                placeholder="Your Message"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send it
              </button>
            </form>
          </div>
          <div className="flex-1 max-h-96 lg:pt-10 lg:max-h-max order-2 lg:order-none overflow-hidden ">
            <img
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
