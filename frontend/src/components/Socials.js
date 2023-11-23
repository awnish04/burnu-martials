import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Socials = () => {
  const socialMediaLinks = [
    { href: "https://www.facebook.com/", icon: <FaFacebookF /> },
    { href: "https://www.twitter.com/", icon: <FaTwitter /> },
    { href: "https://www.pinterest.com/", icon: <FaPinterestP /> },
    { href: "https://www.instagram.com/", icon: <FaInstagram /> },
    { href: "https://www.youtube.com/", icon: <FaYoutube /> },
  ];

  return (
    <div className="lg:flex">
      <ul className="text-white flex gap-x-4">
        {socialMediaLinks.map((item, index) => (
          <li key={index}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Socials;
