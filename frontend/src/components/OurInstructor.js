import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";
import instructors from "../content/instructorData";

const OwlCarousel = () => {
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="mx-auto py-16 text-center">
        <span className="h1">Our Instructors</span>
      </div>
      <Slider {...settings}>
        {instructors.map((instructor, index) => (
          <div key={index} className="w-3/4 m-auto px-8">
            <div className="bg-primary text-center">
              <div className="relative h-72 lg:h-56 overflow-hidden">
                <img
                  className="w-full h-auto align-middle"
                  src={instructor.image}
                  alt=""
                />
              </div>
              <div className="p-4 lg:p-4 h-48 bg-primary">
                <Link
                  to="#"
                  className="text-gray-200 hover:text-red-700 lg:text-xl text-lg font-bold"
                >
                  {instructor.name}
                </Link>
                <div className="text-red-700 text-sm font-normal uppercase">
                  {instructor.role} <br />
                  <span className="text-gray-200 capitalize lg:text-sm text-xs font-light">
                    {instructor.qualification}
                  </span>
                </div>
                {instructor.additionalInfo && (
                  <div className="text-gray-200 capitalize lg:text-sm text-xs font-light">
                    {instructor.additionalInfo}
                  </div>
                )}
                <div className="flex mt-2 text-gray-200 space-x-4 justify-center">
                  {instructor.socialLinks.map((social, i) => (
                    <Link key={i} to={social.link} target="_blank">
                      {social.platform === "Facebook" && <FaFacebookF />}
                      {social.platform === "Twitter" && <FaTwitter />}
                      {social.platform === "Youtube" && <FaYoutube />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OwlCarousel;
