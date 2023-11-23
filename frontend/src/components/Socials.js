import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
const Socials = () => {
  return (
    <div className="lg:flex">
      <ul className="text-white flex gap-x-4">
        <li>
          <a href="https://www.facebook.com/" targer="_blank">
            <FaFacebookF/>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" targer="_blank">
            <FaTwitter/>
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/" targer="_blank">
            <FaPinterestP/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" targer="_blank">
            <FaInstagram/>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" targer="_blank">
            <FaYoutube/>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Socials;
