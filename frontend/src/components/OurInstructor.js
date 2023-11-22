import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Instructor_1 from "../img/about/instructor-1.jpg";
import Instructor_2 from "../img/about/instructor-2.jpg";
import Instructor_3 from "../img/about/instructor-3.jpg";
import Instructor_4 from "../img/about/instructor-4.jpg";
import Instructor_5 from "../img/about/instructor-5.jpg";
// import Link
import { Link } from "react-router-dom";


// import icons
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";

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
            <span className="h1">Our Instructor</span>
          </div>
      {/* <h1 className="h1 text-center">  </h1> */}
      <Slider {...settings}>
        <div>
          <div className="w-3/4 m-auto">
            <div className="bg-primary text-center">
              <div className="relative h-72 lg:h-56 overflow-hidden">
                <img
                  className="w-full h-auto align-middle "
                  src={Instructor_1}
                  alt=""
                />
              </div>
              <div className="p-4 lg:p-4 h-48 bg-primary">
                <Link
                  to="#"
                  className="text-gray-200 hover:text-red-700 lg:text-xl text-lg font-bold"
                >
                  Andrew Smith
                </Link>
                <div className="text-red-700 text-sm font-normal uppercase">
                  assistant martial arts coach <br />
                  <span className="text-gray-200 capitalize lg:text-sm text-xs font-light ">5th Dan karate</span>
                </div>

                <div className="flex mt-2  text-gray-200 space-x-4 justify-center">
                  <Link to="https://www.facebook.com/" targer="_blank">
                    <FaFacebookF />
                  </Link>
                  <Link to="https://www.twitter.com/" targer="_blank">
                    <FaTwitter />
                  </Link>
                  <Link to="https://www.youtube.com/" targer="_blank">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-3/4 m-auto">
            <div className="h-full text-center">
              <div className="relative h-72 lg:h-56 overflow-hidden">
                <img className="w-full h-auto" src={Instructor_2} alt="" />
              </div>
              <div className="p-4 lg:p-4 h-48 bg-primary">
                <Link
                  to="#"
                  className="text-gray-200 hover:text-red-700 lg:text-xl text-lg font-bold"
                >
                  Powel Johnson
                </Link>
                <div className="text-red-700 text-sm font-normal uppercase">
                  assistant martial arts coach <br />
                  <span className="text-gray-200 capitalize lg:text-sm text-xs font-light ">
                    2nd Dan Blackbelt jiu-jitsu 1st Dan Blackbelt judo
                  </span>
                </div>

                <div className="flex mt-2  text-gray-200 space-x-4 justify-center">
                  <Link to="https://www.facebook.com/" targer="_blank">
                    <FaFacebookF />
                  </Link>
                  <Link to="https://www.twitter.com/" targer="_blank">
                    <FaTwitter />
                  </Link>
                  <Link to="https://www.youtube.com/" targer="_blank">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-3/4 m-auto">
            <div className="h-full text-center">
              <div className="relative h-72 lg:h-56 overflow-hidden">
                <img className="w-full h-auto" src={Instructor_3} alt="" />
              </div>
              <div className="p-4 lg:p-4 h-48 bg-primary">
                <Link
                  to="#"
                  className="text-gray-200 hover:text-red-700 lg:text-xl text-lg font-bold"
                >
                  Harris William
                </Link>
                <div className="text-red-700 text-sm font-normal uppercase">
                  assistant martial arts coach <br />
                  <span className="text-gray-200 capitalize lg:text-sm text-xs font-light ">
                    Accredited Muay Thai coach 3rd Dan Blackbelt karate
                  </span>
                </div>

                <div className="flex mt-2  text-gray-200 space-x-4 justify-center">
                  <Link to="https://www.facebook.com/" targer="_blank">
                    <FaFacebookF />
                  </Link>
                  <Link to="https://www.twitter.com/" targer="_blank">
                    <FaTwitter />
                  </Link>
                  <Link to="https://www.youtube.com/" targer="_blank">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-3/4 m-auto">
            <div className="h-full text-center">
              <div className="relative h-72 lg:h-56 overflow-hidden">
                <img className="w-full h-auto" src={Instructor_4} alt="" />
              </div>
              <div className="p-4 lg:p-4 h-48 bg-primary">
                <Link
                  to="#"
                  className="text-gray-200 hover:text-red-700 lg:text-xl text-lg font-bold"
                >
                  Joseph Anderson
                </Link>
                <div className="text-red-700 text-sm font-normal uppercase">
                  fitness coach <br />
                  <span className="text-gray-200 capitalize lg:text-sm text-xs font-light ">
                    BSc in Sports Science Qualified in health and nutrition
                    Specialises in devising strength and conditioning programs
                    for combat athletes
                  </span>
                </div>

                <div className="flex mt-2  text-gray-200 space-x-4 justify-center">
                  <Link to="https://www.facebook.com/" targer="_blank">
                    <FaFacebookF />
                  </Link>
                  <Link to="https://www.twitter.com/" targer="_blank">
                    <FaTwitter />
                  </Link>
                  <Link to="https://www.youtube.com/" targer="_blank">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-3/4 m-auto">
            <div className="h-full text-center">
              <div className="relative h-72 lg:h-56 overflow-hidden">
                <img className="w-full h-auto" src={Instructor_5} alt="" />
              </div>
              <div className="p-4 lg:p-4 h-48 bg-primary">
                <Link
                  to="#"
                  className="text-gray-200 hover:text-red-700 lg:text-xl text-lg font-bold"
                >
                  Allen Murphy
                </Link>
                <div className="text-red-700 text-sm font-normal uppercase">
                  fitness coach <br />
                  <span className="text-gray-200 capitalize lg:text-sm text-xs font-light ">
                    BSc in Physiotherapy MSc in Sports Science
                  </span>
                </div>

                <div className="flex mt-2  text-gray-200 space-x-4 justify-center">
                  <Link to="https://www.facebook.com/" targer="_blank">
                    <FaFacebookF />
                  </Link>
                  <Link to="https://www.twitter.com/" targer="_blank">
                    <FaTwitter />
                  </Link>
                  <Link to="https://www.youtube.com/" targer="_blank">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OwlCarousel;
